import React from "react";

export type RowProps<T> = {
  item: T;
  highlighted?: boolean;
  selected?: boolean;
};

export type RowRenderer<T> = (props: RowProps<T>) => React.ReactElement;

export type ComboboxProps<T> = {
  items: T[];
  name: string;
  onChange: (item?: T) => void;
  value?: T | null;
  itemToString?: (item: T | null) => string;
  itemKey?: (item: T) => string;
  rowRenderer?: RowRenderer<T>;
  filter?: (inputValue: string) => (item: T) => boolean;
  maxHeight?: number;
  virtual?: boolean;
};
