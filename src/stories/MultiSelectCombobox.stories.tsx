/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";

import { ComponentMeta } from "@storybook/react";

import { Box, Checkbox, HStack, Text } from "@chakra-ui/react";
import escapeRegExp from "lodash.escaperegexp";
import { RowProps } from "src/types";
import MultiSelectCombobox from "../MultiSelectCombobox";

import { Animal, animals, people, Person } from "./data";
import { select, select2ndBearInteraction } from "./actions";

export default {
  title: "MultiSelect Combobox",
  component: MultiSelectCombobox,
  args: {
    items: [],
    name: "MultiSelect Combobox",
  },
  argTypes: {
    items: {
      control: false,
    },
    value: {
      constole: false,
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
} as ComponentMeta<typeof MultiSelectCombobox>;

function Template({ onChange, ...args }: any) {
  const [value, setValue] = useState<any>();
  return (
    <MultiSelectCombobox
      {...args}
      value={value}
      onChange={(item) => {
        onChange(item);
        setValue(item);
      }}
    />
  );
}
export const BasicMultiSelectCombobox = Template.bind({});
BasicMultiSelectCombobox.args = {
  items: animals.map((a) => a.name),
  label: "Animals",
};

export const RichTextMultiSelectCombobox = Template.bind({});
RichTextMultiSelectCombobox.args = {
  items: animals,
  label: "Animals",
  itemToString: (animal) => animal?.name,
  rowRenderer: ({ item: animal, selected }) => (
    <Checkbox isChecked={selected}>
      <HStack>
        <Text>{animal.emoji}</Text>
        <Text>{animal.name}</Text>
        <Text as="sup" color={animal.color}>
          {animal.type}
        </Text>
      </HStack>
    </Checkbox>
  ),
};

export const CustomFilter = Template.bind({});
CustomFilter.args = {
  ...RichTextMultiSelectCombobox.args,
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
AutomaticPlacement.args = { ...RichTextMultiSelectCombobox.args };

export const FilterActionCombobox = Template.bind({});
FilterActionCombobox.args = RichTextMultiSelectCombobox.args;
FilterActionCombobox.play = select("bear", 1, 250);

function Row({ item, selected }: RowProps<Person>) {
  return (
    <Checkbox isChecked={selected}>
      <HStack>
        <Text>{item.name}</Text>
        <Box
          display="inline-block"
          width="15px"
          height="15px"
          backgroundColor={item.color}
        />
      </HStack>
    </Checkbox>
  );
}
const MemoRow = React.memo(Row);

export const VirtualCombobox = Template.bind({});
VirtualCombobox.args = {
  items: people,
  label: "People",
  itemKey: (p) => p.id,
  itemToString: (p) => p?.name,
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
