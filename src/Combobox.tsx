import { Box, FormLabel, usePopper } from "@chakra-ui/react";
import { useCombobox } from "downshift";
import React, { useCallback } from "react";
import ComboboxInput from "./Input/ComboboxInput";
import ComboboxList from "./List/ComboboxList";
import VirtualisedComboboxList from "./List/VirtualisedComboboxList";
import { ComboboxProps } from "./types";
import useFilter from "./hooks/useFilter";
import useHighlightScroll from "./hooks/useHighlightScroll";
import { createDefaultFilter, defaultItemToString } from "./utils";

const useOpenAndClear = (
  isOpen: boolean,
  setInputValue: (value: string) => void,
  openMenu: () => void
) =>
  useCallback(() => {
    if (!isOpen) {
      setInputValue("");
      openMenu();
    }
  }, [isOpen, setInputValue, openMenu]);

export default function Combobox<T>({
  name,
  value,
  onChange,
  itemToString = defaultItemToString,
  itemKey = itemToString,
  rowRenderer = (p) => <span>{itemToString(p.item)}</span>,
  filter = createDefaultFilter(itemToString),
  maxHeight = 250,
  label,
  virtual = false,
  ...props
}: ComboboxProps<T>) {
  const { items, inputValue, setInputValue } = useFilter(props.items, filter);
  const { onHighlightedIndexChange, scrollIndex } = useHighlightScroll(virtual);

  const combobox = useCombobox({
    items,
    inputValue,
    itemToString,
    selectedItem: value,
    onSelectedItemChange: ({ selectedItem }) => onChange(selectedItem),
    onInputValueChange: ({ inputValue: newValue }) =>
      setInputValue(newValue ?? ""),
    onIsOpenChange: ({ isOpen, selectedItem }) => {
      if (!isOpen && selectedItem) {
        setInputValue(itemToString(selectedItem));
      }
    },
    onHighlightedIndexChange,
  });

  const openAndClear = useOpenAndClear(
    combobox.isOpen,
    setInputValue,
    combobox.openMenu
  );

  const { referenceRef, getPopperProps } = usePopper({
    matchWidth: true,
  });

  const MenuComponent = virtual ? VirtualisedComboboxList : ComboboxList;

  return (
    <>
      {label && <FormLabel {...combobox.getLabelProps()}>{label}</FormLabel>}
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
            combobox.selectedItem !== null &&
            combobox.selectedItem !== undefined
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
            selectedItems={combobox.selectedItem ? [combobox.selectedItem] : []}
            highlightedIndex={combobox.highlightedIndex}
            scrollIndex={scrollIndex}
          />
        </Box>
      </Box>
    </>
  );
}
