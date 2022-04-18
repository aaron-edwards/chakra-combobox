/* eslint-disable import/no-extraneous-dependencies */
import { PublicInteractionTask } from "storybook-addon-performance";
import { within, userEvent } from "@storybook/testing-library";

export const select =
  (filter: string, index: number, delay: number = 0) =>
  async ({ canvasElement }) => {
    const combobox = within(canvasElement);
    await userEvent.type(combobox.getByRole("textbox"), filter, { delay });
    await userEvent.click(combobox.getAllByRole("option")[index], { delay });
  };

export const select2ndBearInteraction: PublicInteractionTask = {
  name: "Select 2nd Bear",
  description: 'Filters by "bear" and selects the 2nd',
  run: async ({ container }) => select("bear", 1)({ canvasElement: container }),
};
