import { ComponentStyleConfig, extendTheme } from "@chakra-ui/react";

export const Combobox: ComponentStyleConfig = {
  parts: ["menu"],
  baseStyle: {
    menu: {

    },
    item: {
      fontWeight: "medium",
    },
  },
  sizes: {},
  variants: {
    highlighted: {
      item: {
        background: "gray.200",
      },
    },
  },
  defaultProps: {},
};

export default extendTheme({
  components: {
    Combobox,
  },
});
