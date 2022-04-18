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
  clear: () => void;
  onFocus: () => void;
  placeholder?: string;
};

export default function ComboboxInput<T>({
  isOpen,
  name,
  hasSelectedItem,
  inputProps,
  toggleButtonProps,
  onFocus,
  clear,
  placeholder,
}: ComboboxInputProps<T>) {
  return (
    <InputGroup>
      <Input {...inputProps({ name, onFocus, placeholder })} />

      <InputRightAddon paddingX="0px">
        <ButtonGroup size="md" variant="ghost" spacing="0">
          {hasSelectedItem && (
            <IconButton
              aria-label="clear"
              icon={<SmallCloseIcon />}
              onClick={clear}
            />
          )}
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
