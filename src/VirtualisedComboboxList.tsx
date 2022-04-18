import React, { useCallback, useEffect, useRef } from "react";
import { UseComboboxPropGetters } from "downshift";
import { useVirtual } from "react-virtual";
import { Box, List, ListItem } from "@chakra-ui/react";
import { RowRenderer } from "./types";

export type ComboboxMenuProps<T> = {
  name: string;
  items: T[];
  isOpen: Boolean;
  itemKey: (item: T) => string;
  rowRenderer: RowRenderer<T>;
  getMenuProps: UseComboboxPropGetters<T>["getMenuProps"];
  getItemProps: UseComboboxPropGetters<T>["getItemProps"];
  maxHeight: number;
  highlightedIndex?: number;
  selectedItem?: T | null;
};

export default function VirtualisedComboboxList<T>({
  items,
  name,
  isOpen,
  itemKey,
  rowRenderer,
  getMenuProps,
  getItemProps,
  maxHeight,
  highlightedIndex,
  selectedItem,
}: ComboboxMenuProps<T>) {
  const listRef = useRef<HTMLElement>(null);
  const rowVirtualizer = useVirtual({
    size: items.length,
    parentRef: listRef,
    overscan: 1,
    keyExtractor: (index) => itemKey(items[index]),
  });

  useEffect(() => {
    if (highlightedIndex !== undefined) {
      const start = rowVirtualizer.virtualItems[highlightedIndex]?.start;
      if (start === undefined || start > maxHeight) {
        rowVirtualizer.scrollToIndex(highlightedIndex);
      }
    }
  }, [
    highlightedIndex,
    rowVirtualizer.virtualItems,
    rowVirtualizer.scrollToIndex,
  ]);

  return (
    <Box
      ref={listRef}
      zIndex="1000"
      height={isOpen ? maxHeight : 0}
      overflow="auto"
    >
      <List
        {...getMenuProps({ name })}
        pos="relative"
        height={`${rowVirtualizer.totalSize}px`}
      >
        {isOpen &&
          rowVirtualizer.virtualItems.map((virtualRow) => {
            const item = items[virtualRow.index];
            const highlighted = highlightedIndex === virtualRow.index;
            const selected = selectedItem === item;
            return (
              <ListItem
                key={itemKey(item)}
                ref={virtualRow.measureRef}
                bg={highlighted && "gray.200"}
                fontWeight={selected && "bold"}
                pos="absolute"
                top={0}
                left={0}
                width="100%"
                transform={`translateY(${virtualRow.start}px)`}
                {...getItemProps({
                  item,
                  index: virtualRow.index,
                  ref: virtualRow.measureRef,
                })}
              >
                {rowRenderer({ item, highlighted, selected })}
              </ListItem>
            );
          })}
      </List>
    </Box>
  );
}
