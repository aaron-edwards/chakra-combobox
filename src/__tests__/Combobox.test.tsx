import React from "react";
import { render } from "@testing-library/react";
import Combobox from "../Combobox";

describe("<Combobox />", () => {
  const defaultProps = {
    name: "combobox",
    items: ["Dog", "Cat", "Bird"],
  };
  it("should contain a combobox", async () => {
    const { findByRole } = render(<Combobox {...defaultProps} />);
    expect(await findByRole("combobox")).toHaveAccessibleName("combobox");
  });
});
