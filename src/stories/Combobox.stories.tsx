/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";

import { ComponentMeta } from "@storybook/react";

import { Box, HStack, Text } from "@chakra-ui/react";
import escapeRegExp from "lodash.escaperegexp";
import { Combobox } from "..";

import { Animal, animals, people, Person } from "./data";
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

function Template({ onChange, ...args }: any) {
  const [value, setValue] = useState<any>(null);
  return (
    <Combobox
      {...args}
      value={value}
      onChange={(item) => {
        onChange(item);
        setValue(item);
      }}
    />
  );
}

export const BasicCombobox = Template.bind({});
BasicCombobox.args = {
  items: animals.map((a) => a.name),
  label: "Animals",
};

export const RichTextCombobox = Template.bind({});
RichTextCombobox.args = {
  items: animals,
  label: "Animals",
  itemToString: (animal) => animal?.name,
  rowRenderer: ({ item: animal }) => (
    <HStack>
      <Text>{animal.emoji}</Text>
      <Text>{animal.name}</Text>
      <Text as="sup" color={animal.color}>
        {animal.type}
      </Text>
    </HStack>
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

export function AutomaticPlacement(args) {
  return (
    <Box h={400} display="flex" flexDir="column">
      <Box flexGrow={1} />
      <Template {...args} />
    </Box>
  );
}
AutomaticPlacement.args = { ...RichTextCombobox.args };

export const FilterActionCombobox = Template.bind({});
FilterActionCombobox.args = RichTextCombobox.args;
FilterActionCombobox.play = select("bear", 1, 250);

function Row({ item }: { item: Person }) {
  return (
    <HStack>
      <Text>{item.name}</Text>
      <Box
        display="inline-block"
        width="15px"
        height="15px"
        backgroundColor={item.color}
      />
    </HStack>
  );
}
const MemoRow = React.memo(Row);

export const VirtualCombobox = Template.bind({});
VirtualCombobox.args = {
  items: people,
  label: "People",
  itemKey: (p: Person) => p.id,
  itemToString: (p: Person) => p?.name,
  virtual: true,
  filter: (input: string) => {
    const res = input.split(" ").map((s) => new RegExp(escapeRegExp(s), "i"));
    return (item: Person) => {
      const string = `${item.name} ${item.color}`;
      return res.every((re) => string.match(re));
    };
  },
  rowRenderer: MemoRow,
};
