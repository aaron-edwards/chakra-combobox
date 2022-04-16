import React from "react";
import { render } from "@testing-library/react";
import Combobox from "..";

describe("<Combobox />", () => {
  const defaultProps = {
    name: "combobox",
    items: [],
  };
  it("should contain a combobox", async () => {
    const { findByRole } = render(<Combobox {...defaultProps} />);
    expect(await findByRole("combobox")).toHaveAccessibleName("combobox");
  });
});
