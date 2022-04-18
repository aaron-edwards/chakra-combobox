import { Box } from "@chakra-ui/react";
import { useCombobox } from "downshift";
import React, { useCallback, useMemo, useState } from "react";
import escapeRegExp from "lodash.escaperegexp";
import ComboboxInput from "./ComboboxInput";
import ComboboxList from "./ComboboxList";
import VirtualisedComboboxList from "./VirtualisedComboboxList";
import { RowRenderer } from "./types";

function defaultItemToString<T>(item: T) {
  return typeof item === "string" ? item : JSON.stringify(item);
}

type Props<T> = {
  items: T[];
  name: string;
  onChange: (item?: T) => void;
  selectedItem?: T | null;
  itemToString?: (item: T | null) => string;
  itemKey?: (item: T) => string;
  rowRenderer?: RowRenderer<T>;
  filter?: (inputValue: string) => (item: T) => boolean;
  maxHeight?: number;
  virtual?: boolean;
};

export default function Combobox<T>({
  name,
  onChange,
  itemToString = defaultItemToString,
  itemKey = itemToString,
  rowRenderer = (p) => itemToString(p.item),
  filter = (input: string) => {
    const re = new RegExp(escapeRegExp(input), "i");
    return (item: T) => !!itemToString(item).match(re);
  },
  maxHeight = 250,
  ...props
}: Props<T>) {
  const [inputValue, setInputValue] = useState("");
  const [scrollIndex, setScrollIndex] = useState<number>();

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
    selectedItem: props.selectedItem,
    onSelectedItemChange: ({ selectedItem }) =>
      onChange(selectedItem === null ? undefined : selectedItem),
    onInputValueChange: ({ inputValue: newValue }) =>
      setInputValue(newValue ?? ""),
    onIsOpenChange: ({ isOpen, selectedItem }) => {
      if (!isOpen && selectedItem) {
        setInputValue(itemToString(selectedItem));
      }
    },
    onHighlightedIndexChange: (change) => {
      if (
        change.highlightedIndex &&
        change.isOpen &&
        change.type.includes("__input_keydown_arrow")
      ) {
        setScrollIndex(change.highlightedIndex);
      } else {
        setScrollIndex(undefined);
      }
    },
  });

  const openAndClear = useCallback(() => {
    if (!combobox.isOpen) {
      setInputValue("");
      combobox.openMenu();
    }
  }, [combobox.isOpen, setInputValue, combobox.openMenu]);

  const MenuComponent = props.virtual ? VirtualisedComboboxList : ComboboxList;

  return (
    <Box {...combobox.getComboboxProps({ name, "aria-label": name })}>
      <ComboboxInput
        isOpen={combobox.isOpen}
        name={name}
        hasSelectedItem={
          combobox.selectedItem !== null && combobox.selectedItem !== undefined
        }
        inputProps={combobox.getInputProps}
        toggleButtonProps={combobox.getToggleButtonProps}
        onFocus={openAndClear}
        placeholder={
          combobox.selectedItem
            ? itemToString(combobox.selectedItem)
            : undefined
        }
        clear={combobox.reset}
      />
      <Box
        pos="relative"
        borderRadius="base"
        border={combobox.isOpen ? "1px solid" : "none"}
        borderColor="gray.200"
        marginTop={combobox.isOpen ? 1 : undefined}
        marginStart="0"
      >
        <MenuComponent
          name={name}
          items={items}
          itemKey={itemKey}
          rowRenderer={rowRenderer}
          isOpen={combobox.isOpen}
          getItemProps={combobox.getItemProps}
          getMenuProps={combobox.getMenuProps}
          maxHeight={maxHeight}
          selectedItem={combobox.selectedItem}
          highlightedIndex={combobox.highlightedIndex}
          scrollIndex={scrollIndex}
        />
      </Box>
    </Box>
  );
}
