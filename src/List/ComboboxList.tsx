import React from "react";
import { UseComboboxPropGetters } from "downshift";
import { List, ListItem, useColorModeValue } from "@chakra-ui/react";
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

export default function ComboboxList<T>({
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
}: ComboboxMenuProps<T>) {
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const bg = useColorModeValue("white", "gray.800");
  const highlightBg = useColorModeValue("gray.100", "whiteAlpha.100");
  return (
    <List
      {...getMenuProps({ name })}
      listStyleType="none"
      aria-label={name && `${name} list`}
      maxH={maxHeight}
      marginX="0px"
      width="100%"
      overflowY="scroll"
      borderRadius="base"
      border={isOpen ? "1px solid" : "none"}
      borderColor={borderColor}
      cursor="pointer"
      bg={bg}
    >
      {isOpen &&
        items.map((item, index) => {
          const highlighted = highlightedIndex === index;
          const selected = selectedItems.includes(item);
          return (
            <ListItem
              key={itemKey(item)}
              bg={highlighted && highlightBg}
              fontWeight={selected && "bold"}
              {...getItemProps({ item, index })}
            >
              <Row item={item} highlighted={highlighted} selected={selected} />
            </ListItem>
          );
        })}
    </List>
  );
}
