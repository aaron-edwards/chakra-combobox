import React from "react";

export type RowRenderer<T> = (props: {
  item: T;
  highlighted?: boolean;
  selected?: boolean;
}) => React.ReactNode;
