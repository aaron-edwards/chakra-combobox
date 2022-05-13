import React from "react";

import { UseComboboxPropGetters } from "downshift";
import {
  ButtonGroup,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export type ComboboxInputProps<T> = {
  isOpen: Boolean;
  name?: string;
  inputProps: UseComboboxPropGetters<T>["getInputProps"];
  toggleButtonProps: UseComboboxPropGetters<T>["getToggleButtonProps"];
  selectedItems: T[];
  itemKey: (item: T) => string;
  chipComponent: ({ item: T }) => React.ReactElement;
};
function ComboboxInput<T>(
  {
    isOpen,
    name,
    inputProps,
    toggleButtonProps,
    itemKey,
    selectedItems,
    chipComponent: ChipComponent,
  }: ComboboxInputProps<T>,
  ref: React.ForwardedRef<HTMLElement>
) {
  return (
    <InputGroup ref={ref}>
      <InputLeftAddon
        background="transparent"
        maxW="75%"
        display="flex"
        overflowY="auto"
        height="auto"
        gap="1"
      >
        {selectedItems.map((item) => (
          <ChipComponent key={itemKey(item)} item={item} />
        ))}
      </InputLeftAddon>
      <Input {...inputProps({ name })} height="auto" />

      <InputRightAddon paddingX="0px" height="auto">
        <ButtonGroup size="md" variant="ghost" spacing="0">
          <IconButton
            {...toggleButtonProps({ "aria-label": "toggle menu" })}
            icon={
              <ChevronDownIcon
                transform={isOpen ? "rotate(-180deg)" : undefined}
                transition="0.2s ease-in-out;"
              />
            }
          />
        </ButtonGroup>
      </InputRightAddon>
    </InputGroup>
  );
}

export default React.forwardRef(ComboboxInput);
