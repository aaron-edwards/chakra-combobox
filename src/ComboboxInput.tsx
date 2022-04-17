import React from "react";

import { UseComboboxPropGetters } from "downshift";
import {
  ButtonGroup,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { ChevronDownIcon, SmallCloseIcon } from "@chakra-ui/icons";

export type ComboboxInputProps<T> = {
  isOpen: Boolean;
  name?: string;
  hasSelectedItem: boolean;
  inputProps: UseComboboxPropGetters<T>["getInputProps"];
  toggleButtonProps: UseComboboxPropGetters<T>["getToggleButtonProps"];
  onClose: () => void;
};

export default function ComboboxInput<T>({
  isOpen,
  name,
  hasSelectedItem,
  inputProps,
  toggleButtonProps,
  onClose,
}: ComboboxInputProps<T>) {
  return (
    <InputGroup>
      <Input {...inputProps({ name, "aria-label": name && `${name} input` })} />

      <InputRightAddon paddingX="0px">
        <ButtonGroup size="md" variant="ghost" spacing="0">
          {hasSelectedItem && (
            <IconButton
              aria-label={
                name ? `${name} close-combobox-button` : "close-combobox-button"
              }
              icon={<SmallCloseIcon />}
              onClick={onClose}
            />
          )}
          <IconButton
            {...toggleButtonProps({
              name,
              "aria-label": name && `${name} toggle-button`,
            })}
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
