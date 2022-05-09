import React, { useEffect, useRef } from "react";
import { UseComboboxPropGetters } from "downshift";
import { useVirtual } from "react-virtual";
import { Box, List, ListItem, useChakra } from "@chakra-ui/react";
import { RowRenderer } from "../types";

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
  scrollIndex?: number;
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
  scrollIndex,
}: ComboboxMenuProps<T>) {
  const listRef = useRef<HTMLElement>(null);
  const rowVirtualizer = useVirtual({
    size: items.length,
    parentRef: listRef,
    overscan: 1,
    keyExtractor: (index) => itemKey(items[index]),
  });
  useEffect(() => {
    if (scrollIndex && rowVirtualizer[scrollIndex] === undefined) {
      rowVirtualizer.scrollToIndex(scrollIndex);
    }
  }, [scrollIndex]);
  const { colorMode } = useChakra();

  return (
    <Box
      ref={listRef}
      zIndex="1000"
      display={isOpen ? undefined : "none"}
      maxHeight={isOpen ? maxHeight : 0}
      overflow="auto"
      borderRadius="base"
      border={isOpen ? "1px solid" : "none"}
      borderColor={colorMode === "dark" ? "whiteAlpha.200" : "gray.200"}
      cursor="pointer"
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
                bg={
                  highlighted &&
                  (colorMode === "dark" ? "whiteAlpha.100" : "gray.100")
                }
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
