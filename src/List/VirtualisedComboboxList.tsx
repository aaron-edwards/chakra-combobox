import React, { useEffect, useRef } from "react";
import { UseComboboxPropGetters } from "downshift";
import { useVirtual } from "react-virtual";
import { Box, List, ListItem, useColorModeValue } from "@chakra-ui/react";
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
  selectedItems: T[];
  scrollIndex?: number;
};

export default function VirtualisedComboboxList<T>({
  items,
  name,
  isOpen,
  itemKey,
  rowRenderer: Row,
  getMenuProps,
  getItemProps,
  maxHeight,
  highlightedIndex,
  selectedItems,
  scrollIndex,
}: ComboboxMenuProps<T>) {
  const listRef = useRef<HTMLElement>(null);
  const rowVirtualizer = useVirtual({
    size: items.length,
    parentRef: listRef,
    overscan: 10,
    keyExtractor: (index) => itemKey(items[index]),
  });
  useEffect(() => {
    if (scrollIndex && rowVirtualizer[scrollIndex] === undefined) {
      rowVirtualizer.scrollToIndex(scrollIndex);
    }
  }, [scrollIndex]);
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const bg = useColorModeValue("white", "gray.800");
  const highlightBg = useColorModeValue("gray.100", "whiteAlpha.100");

  return (
    <Box
      ref={listRef}
      display={isOpen ? undefined : "none"}
      maxHeight={isOpen ? maxHeight : 0}
      overflow="auto"
      borderRadius="base"
      border={isOpen ? "1px solid" : "none"}
      borderColor={borderColor}
      cursor="pointer"
      bg={bg}
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
            const selected = selectedItems.includes(item);
            return (
              <ListItem
                key={virtualRow.index}
                bg={highlighted && highlightBg}
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
                <Row
                  item={item}
                  highlighted={highlighted}
                  selected={selected}
                />
              </ListItem>
            );
          })}
      </List>
    </Box>
  );
}
