import { Box, usePopper } from "@chakra-ui/react";
import { useCombobox } from "downshift";
import React, { useCallback, useMemo, useState } from "react";
import escapeRegExp from "lodash.escaperegexp";
import ComboboxInput from "./Input/ComboboxInput";
import ComboboxList from "./List/ComboboxList";
import VirtualisedComboboxList from "./List/VirtualisedComboboxList";
import { ComboboxProps } from "./types";

function defaultItemToString<T>(item: T) {
  return typeof item === "string" ? item : JSON.stringify(item);
}

function createDefaultFilter<T>(itemToString: (item: T) => string) {
  return (input: string) => {
    const re = new RegExp(escapeRegExp(input), "i");
    return (item: T) => !!itemToString(item).match(re);
  };
}

export default function Combobox<T>({
  name,
  onChange,
  itemToString = defaultItemToString,
  itemKey = itemToString,
  rowRenderer = (p) => <span>{itemToString(p.item)}</span>,
  filter = createDefaultFilter(itemToString),
  maxHeight = 250,
  ...props
}: ComboboxProps<T>) {
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
        props.virtual &&
        change.highlightedIndex !== undefined &&
        change.isOpen &&
        (change.type === useCombobox.stateChangeTypes.InputKeyDownArrowDown ||
          change.type === useCombobox.stateChangeTypes.InputKeyDownArrowUp)
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

  const { referenceRef, getPopperProps } = usePopper({
    matchWidth: true,
  });

  const MenuComponent = props.virtual ? VirtualisedComboboxList : ComboboxList;

  return (
    <Box
      {...combobox.getComboboxProps({
        name,
        "aria-label": name,
      })}
    >
      <ComboboxInput
        isOpen={combobox.isOpen}
        name={name}
        showClear={
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
        ref={referenceRef}
      />

      <Box {...getPopperProps()} zIndex="popover">
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
