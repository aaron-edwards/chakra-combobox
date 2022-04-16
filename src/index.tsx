import {
  Box,
  ButtonGroup,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useCombobox } from "downshift";
import React, { useCallback, useState } from "react";

function defaultItemToString<T>(item: T) {
  return typeof item === "string" ? item : JSON.stringify(item);
}

function ariaLabel(name?: string, prefix?: string) {
  if (name) {
    return [name, prefix].join(" ");
  }
  return undefined;
}

type Props<T> = {
  items: T[];
  name: string;
  itemToString?: (item: T | null) => string;
  itemKey?: (item: T) => string;
  label?: (item: T) => React.ReactNode;
};

export default function Combobox<T>({
  name,
  items,
  itemToString = defaultItemToString,
  ...props
}: Props<T>) {
  const itemKey = props.itemKey ?? itemToString;
  const label = props.label ?? itemToString;
  const createLabel = useCallback(
    (prefix?: string) => ariaLabel(name, prefix),
    [name]
  );

  const [inputValue, setInputValue] = useState("");

  const combobox = useCombobox({
    items,
    inputValue,
    itemToString,
    onInputValueChange: ({ inputValue: newValue }) =>
      setInputValue(newValue ?? ""),
  });
  return (
    <Box {...combobox.getComboboxProps({ name, "aria-label": createLabel() })}>
      <InputGroup>
        <Input
          {...combobox.getInputProps({ "aria-label": createLabel("input") })}
        />
        <InputRightAddon paddingX="0px">
          <ButtonGroup spacing="0" variant="ghost">
            <IconButton
              {...combobox.getToggleButtonProps({
                "aria-label": createLabel("toggle"),
              })}
              icon={
                <ChevronDownIcon
                  transform={combobox.isOpen ? "rotate(-180deg)" : undefined}
                  transition="0.2s ease-in-out;"
                />
              }
            />
          </ButtonGroup>
        </InputRightAddon>
      </InputGroup>

      <Box {...combobox.getMenuProps()}>
        {combobox.isOpen && (
          <UnorderedList
            marginStart="0px"
            marginTop="1"
            listStyleType="none"
            borderColor="gray.200"
            borderWidth="1px"
            borderRadius="md"
          >
            {items.map((item, index) => (
              <ListItem
                key={itemKey(item)}
                background={
                  combobox.highlightedIndex === index ? "gray.200" : undefined
                }
                fontWeight={combobox.selectedItem === item ? "bold" : undefined}
                {...combobox.getItemProps({ item, index })}
              >
                {label(item)}
              </ListItem>
            ))}
          </UnorderedList>
        )}
      </Box>
    </Box>
  );
}
