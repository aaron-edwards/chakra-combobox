import React from "react";
import { render } from "@testing-library/react";
import Combobox from "..";

describe("<Combobox />", () => {
  it("should greet", () => {
    const { baseElement } = render(<Combobox name="there" />);
    expect(baseElement).toHaveTextContent("Hello there");
  });
});
