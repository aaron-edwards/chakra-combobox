import React from "react";

export type RowRenderer<T> = (props: {
  item: T;
  highlighted?: boolean;
  selected?: boolean;
}) => React.ReactNode;

export type ComboboxProps<T> = {
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