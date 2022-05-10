import { Badge, CloseButton, ThemeTypings } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactChild;
  onRemove: () => void;
  colorScheme?: ThemeTypings["colorSchemes"];
};

export default function Chip({ children, onRemove, colorScheme }: Props) {
  return (
    <Badge
      as="div"
      display="flex"
      alignItems="baseline"
      colorScheme={colorScheme}
    >
      {children}
      <CloseButton size="sm" onClick={onRemove} />
    </Badge>
  );
}
