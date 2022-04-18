import React from "react";
import { UseComboboxPropGetters } from "downshift";
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
  return (
    <Box pos="relative" zIndex="1000">
      <List
        {...getMenuProps({ name })}
        borderRadius="base"
        border={isOpen ? "1px solid" : "none"}
        borderColor="gray.200"
        marginTop="1"
        marginStart="0"
        listStyleType="none"
        aria-label={name && `${name} list`}
        pos="relative"
        maxH={maxHeight}
        zIndex="1000"
        position="absolute"
        marginX="0px"
        width="100%"
        overflowY="scroll"
        background="white"
      >
        {isOpen &&
          items.map((item, index) => {
            const highlighted = highlightedIndex === index;
            const selected = selectedItem === item;
            return (
              <ListItem
                key={itemKey(item)}
                bg={highlighted && "gray.200"}
                fontWeight={selected && "bold"}
                {...getItemProps({ item, index })}
              >
                {rowRenderer({ item, highlighted, selected })}
              </ListItem>
            );
          })}
      </List>
    </Box>
  );
}
