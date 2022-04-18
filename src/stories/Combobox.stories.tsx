/* eslint-disable import/no-extraneous-dependencies */
import React from "react";

import { ComponentMeta } from "@storybook/react";

import { Text } from "@chakra-ui/react";
import escapeRegExp from "lodash.escaperegexp";
import { Combobox } from "..";

import { Animal, animals } from "./data";
import { select, select2ndBearInteraction } from "./actions";

export default {
  title: "Combobox",
  component: Combobox,
  args: {
    items: [],
    name: "Combobox",
  },
  argTypes: {
    items: {
      control: false,
    },
    selectedItem: {
      control: false,
    },
    rowRenderer: {
      control: false,
    },
  },
  parameters: {
    performance: {
      interactions: [select2ndBearInteraction],
    },
  },
} as ComponentMeta<typeof Combobox>;

function Template(args) {
  return <Combobox {...args} />;
}

export const BasicCombobox = Template.bind({});
BasicCombobox.args = { items: animals.slice(0, 20).map((a) => a.name) };

export const RichTextCombobox = Template.bind({});
RichTextCombobox.args = {
  items: animals.slice(0, 20),
  itemToString: (animal) => animal?.name,
  rowRenderer: ({ item: animal }) => (
    <Text as="span">
      {animal.emoji}
      {animal.name}
      <Text as="sup" color={animal.color} padding="2">
        {animal.type}
      </Text>
    </Text>
  ),
};

export const CustomFilter = Template.bind({});
CustomFilter.args = {
  ...RichTextCombobox.args,
  filter: (input: string) => {
    const res = input.split(" ").map((s) => new RegExp(escapeRegExp(s), "i"));
    return (item: Animal) => {
      const string = `${item.name} ${item.type}`;
      return res.every((re) => string.match(re));
    };
  },
};

export const FilterActionCombobox = Template.bind({});
FilterActionCombobox.args = RichTextCombobox.args;
FilterActionCombobox.play = select("bear", 1, 250);

export const VirtualCombobox = Template.bind({});
VirtualCombobox.args = {
  ...CustomFilter.args,
  items: animals,
  itemKey: (animal) => animal.id,
  virtual: true,
};
