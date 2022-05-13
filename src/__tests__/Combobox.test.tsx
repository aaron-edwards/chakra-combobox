import React from "react";
import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Combobox from "../Combobox";

function setup(jsx: React.ReactElement) {
  const renderResult = render(jsx);
  const getCombobox = () => renderResult.getByRole("combobox");
  return {
    user: userEvent.setup(),
    ...renderResult,
    getCombobox,
    getToggleButton: () =>
      within(getCombobox()).getByRole("button", { name: "toggle menu" }),
    getList: () => within(getCombobox()).getByRole("listbox"),
    getTextbox: () => within(getCombobox()).getByRole("textbox"),
    getClearButton: () =>
      within(getCombobox()).getByRole("button", { name: "clear" }),
  };
}

describe("<Combobox />", () => {
  describe.each`
    virtual
    ${undefined}
    ${true}
  `("When virtual is $virtual", ({ virtual }) => {
    const props = {
      name: "combobox",
      items: ["Dog", "Cat", "Bird"],
      onChange: jest.fn(),
      virtual,
    };
    it("should contain a combobox", () => {
      const { getCombobox } = setup(<Combobox {...props} />);
      expect(getCombobox()).toHaveAccessibleName("combobox");
    });

    describe("when menu is opened", () => {
      it("should display all items", async () => {
        const { user, getList, getToggleButton } = setup(
          <Combobox {...props} virtual />
        );
        await user.click(getToggleButton());

        expect(getList()).toHaveTextContent(props.items.join(""));
      });
      it("should allow closing", async () => {
        const { user, getToggleButton } = setup(<Combobox {...props} />);
        await user.click(getToggleButton());
        await user.click(getToggleButton());
      });
      it("should allow item selection", async () => {
        const { user, getToggleButton, getByText } = setup(
          <Combobox {...props} />
        );
        await user.click(getToggleButton());
        await user.click(getByText("Cat"));
        expect(props.onChange).toHaveBeenCalledWith("Cat");
      });
    });

    describe("filter", () => {
      it("should provide basic filtering", async () => {
        const { user, getTextbox, getList } = setup(<Combobox {...props} />);
        await user.click(getTextbox());
        await user.keyboard("d");
        expect(getList()).toHaveTextContent(["Dog", "Bird"].join(""));
      });
    });

    describe("controlled component", () => {
      it("should display selected item", () => {
        const { getTextbox } = setup(<Combobox {...props} value="Cat" />);
        expect(getTextbox()).toHaveValue("Cat");
      });

      it("should allow item selection", async () => {
        const { user, getToggleButton, getByText } = setup(
          <Combobox {...props} />
        );
        await user.click(getToggleButton());
        await user.click(getByText("Dog"));
        expect(props.onChange).toHaveBeenCalledWith("Dog");
      });
    });

    describe("clear", () => {
      it("should clear the current selection", async () => {
        const { user, getClearButton } = setup(
          <Combobox {...props} value="Cat" />
        );
        await user.click(await getClearButton());
        expect(props.onChange).toHaveBeenCalledWith(null);
      });

      it("should not contain a clear button if value is null", async () => {
        const { getTextbox, queryByRole } = setup(
          <Combobox {...props} value={null} />
        );
        expect(
          queryByRole("button", { name: "clear" })
        ).not.toBeInTheDocument();
        expect(getTextbox()).toHaveValue("");
      });
    });
  });
});
