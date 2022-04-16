import React from 'react';

type Props = {
  name: string
};

export default function Combobox({ name = 'World' }: Props) {
  return <h1>{`Hello ${name}`}</h1>;
}
