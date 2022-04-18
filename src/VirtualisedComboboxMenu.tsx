import React, { useCallback, useRef } from "react";
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

export default function ComboboxMenu<T>({
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
    overscan: 10,
  });

  return (
    <Box pos="relative" zIndex="1000">
      <List
        {...getMenuProps({ name, ref: listRef })}
        borderRadius="base"
        border={isOpen ? "1px solid" : "none"}
        height={`${rowVirtualizer.totalSize}px`}
        borderColor="gray.200"
        marginTop="1"
        marginStart="0"
        listStyleType="none"
        aria-label={name && `${name} list`}
        maxH={maxHeight}
        zIndex="1000"
        position="relative"
        marginX="0px"
        width="100%"
        overflowY="auto"
        background="white"
      >
        {isOpen &&
          rowVirtualizer.virtualItems.map((virtualRow) => {
            const item = items[virtualRow.index];
            const highlighted = highlightedIndex === virtualRow.index;
            const selected = selectedItem === item;
            return (
              <ListItem
                key={itemKey(item)}
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
