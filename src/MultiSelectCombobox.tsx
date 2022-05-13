import React, { useCallback } from "react";
import { Box, Checkbox, usePopper, FormLabel } from "@chakra-ui/react";
import { useCombobox, useMultipleSelection } from "downshift";
import ComboboxList from "./List/ComboboxList";
import VirtualisedComboboxList from "./List/VirtualisedComboboxList";
import { MultiSelectComboboxProps } from "./types";
import useFilter from "./hooks/useFilter";
import useHighlightScroll from "./hooks/useHighlightScroll";
import MultiSelectComboboxInput from "./Input/MultiSelectComboboxInput";
import Chip from "./Input/Chip";
import { createDefaultFilter, defaultItemToString } from "./utils";

export default function MultiSelectCombobox<T>({
  name,
  value,
  onChange,
  itemToString = defaultItemToString,
  itemKey = itemToString,
  rowRenderer = (p) => (
    <Checkbox isChecked={p.selected}>{itemToString(p.item)}</Checkbox>
  ),
  filter = createDefaultFilter(itemToString),
  maxHeight = 250,
  label,
  ...props
}: MultiSelectComboboxProps<T>) {
  const { items, inputValue, setInputValue } = useFilter(props.items, filter);
  const { onHighlightedIndexChange, scrollIndex } = useHighlightScroll(
    props.virtual ?? false
  );

  const multiSelect = useMultipleSelection({});

  const combobox = useCombobox({
    items,
    inputValue,
    onHighlightedIndexChange,
    selectedItem: null,

    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges;
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true,
          };
        default:
          return changes;
      }
    },
    onStateChange: (state) => {
      switch (state.type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(state.inputValue ?? "");
          break;
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          if (state.selectedItem) {
            setInputValue("");
            if (multiSelect.selectedItems.includes(state.selectedItem)) {
              multiSelect.removeSelectedItem(state.selectedItem);
            } else {
              multiSelect.addSelectedItem(state.selectedItem);
            }
          }
          break;
        default:
          break;
      }
    },
  });

  const { referenceRef, getPopperProps } = usePopper({
    matchWidth: true,
  });

  const MenuComponent = props.virtual ? VirtualisedComboboxList : ComboboxList;

  const inputProps = useCallback(
    (args: any) => {
      return combobox.getInputProps(
        multiSelect.getDropdownProps({
          preventKeyAction: combobox.isOpen,
          ...args,
          onFocus: () => {
            if (!combobox.isOpen) {
              combobox.openMenu();
            }
          },
        })
      );
    },
    [
      combobox.getInputProps,
      multiSelect.getDropdownProps,
      combobox.isOpen,
      combobox.openMenu,
    ]
  );

  return (
    <>
      {label && <FormLabel {...combobox.getLabelProps()}>{label}</FormLabel>}
      <Box
        {...combobox.getComboboxProps({
          name,
          "aria-label": name,
        })}
      >
        <MultiSelectComboboxInput
          isOpen={combobox.isOpen}
          name={name}
          inputProps={inputProps}
          toggleButtonProps={combobox.getToggleButtonProps}
          ref={referenceRef}
          itemKey={itemKey}
          selectedItems={multiSelect.selectedItems as T[]}
          // eslint-disable-next-line react/no-unstable-nested-components
          chipComponent={({ item }) => (
            <Chip onRemove={() => multiSelect.removeSelectedItem(item)}>
              {itemToString(item)}
            </Chip>
          )}
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
            selectedItems={multiSelect.selectedItems}
            highlightedIndex={combobox.highlightedIndex}
            scrollIndex={scrollIndex}
          />
        </Box>
      </Box>
    </>
  );
}
