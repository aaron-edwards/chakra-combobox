import { Box, List, ListItem } from "@chakra-ui/react";
import { useCombobox } from "downshift";
import React, { useMemo, useState } from "react";
import escapeRegExp from "lodash.escaperegexp";
import ComboboxInput from "./ComboboxInput";

function defaultItemToString<T>(item: T) {
  return typeof item === "string" ? item : JSON.stringify(item);
}

type Props<T> = {
  items: T[];
  name: string;
  itemToString?: (item: T | null) => string;
  itemKey?: (item: T) => string;
  label?: (item: T) => React.ReactNode;
  filter?: (inputValue: string) => (item: T) => boolean;
};

export default function Combobox<T>({
  name,
  itemToString = defaultItemToString,
  itemKey = itemToString,
  label = itemToString,
  filter = (input: string) => {
    const re = new RegExp(escapeRegExp(input), "i");
    return (item: T) => !!itemToString(item).match(re);
  },
  ...props
}: Props<T>) {
  const [inputValue, setInputValue] = useState("");
  const items = useMemo(() => {
    if (inputValue) {
      const predicate = filter(inputValue);
      return props.items.filter(predicate);
    }
    return props.items;
  }, [props.items, filter, inputValue]);

  const combobox = useCombobox({
    items,
    inputValue,
    itemToString,
    onInputValueChange: ({ inputValue: newValue }) =>
      setInputValue(newValue ?? ""),
  });

  return (
    <Box {...combobox.getComboboxProps({ name, "aria-label": name })}>
      <ComboboxInput
        isOpen={combobox.isOpen}
        hasSelectedItem={combobox.selectedItem !== null}
        inputProps={combobox.getInputProps}
        toggleButtonProps={combobox.getToggleButtonProps}
        onClose={combobox.reset}
      />

      <Box {...combobox.getMenuProps()}>
        {combobox.isOpen && (
          <List
            borderRadius="base"
            border="1px solid"
            borderColor="gray.200"
            marginTop="1"
            marginStart="0"
            listStyleType="none"
          >
            {items.map((item, index) => {
              return (
                <ListItem
                  key={itemKey(item)}
                  bg={combobox.highlightedIndex === index && "gray.200"}
                  fontWeight={combobox.selectedItem === item && "bold"}
                  {...combobox.getItemProps({ item, index })}
                >
                  {label(item)}
                </ListItem>
              );
            })}
          </List>
        )}
      </Box>
    </Box>
  );
}
