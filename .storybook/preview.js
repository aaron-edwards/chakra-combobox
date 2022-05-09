import {addDecorator} from '@storybook/react'

import React, { useEffect } from 'react'
import {ChakraProvider, CSSReset, useChakra} from '@chakra-ui/react'
import { withPerformance } from "storybook-addon-performance"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circle',
      items: [
        { title: 'Light', value: 'light', icon: 'circlehollow' }, 
        { title: 'Dark', value: 'dark', icon: 'circle', }
      ],
    },
  },
};

const ThemeSwitcher = ({mode}) => {
  const { setColorMode } = useChakra()
  useEffect(() => {setColorMode(mode)}, [mode])
  return null;
}

const withChakra = (StoryFn, context) => (
  <React.StrictMode>
    <CSSReset/>
    <ChakraProvider>
      <ThemeSwitcher mode={context.globals.theme}/>
      <StoryFn />
    </ChakraProvider>
  </React.StrictMode>
)

export const decorators = [ withChakra, withPerformance ]