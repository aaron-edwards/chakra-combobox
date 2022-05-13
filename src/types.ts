import React from "react";

export type RowProps<T> = {
  item: T;
  highlighted?: boolean;
  selected?: boolean;
};

export type RowRenderer<T> = (props: RowProps<T>) => React.ReactElement;

type CommonProps<T> = {
  items: T[];
  label?: React.ReactElement;
  name: string;
  itemToString?: (item: T | null) => string;
  itemKey?: (item: T) => string;
  rowRenderer?: RowRenderer<T>;
  filter?: (inputValue: string) => (item: T) => boolean;
  maxHeight?: number;
  virtual?: boolean;
};

export type ComboboxProps<T> = CommonProps<T> & {
  value?: T | null;
  onChange: (item?: T | null) => void;
};

export type MultiSelectComboboxProps<T> = CommonProps<T> & {
  value?: T[];
  onChange: (item: T[]) => void;
};
