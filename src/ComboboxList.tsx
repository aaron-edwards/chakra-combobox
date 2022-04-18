import React from "react";
import { UseComboboxPropGetters } from "downshift";
import { List, ListItem } from "@chakra-ui/react";
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

export default function ComboboxList<T>({
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
    <List
      {...getMenuProps({ name })}
      listStyleType="none"
      aria-label={name && `${name} list`}
      maxH={maxHeight}
      zIndex="1000"
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
  );
}
