import {addDecorator} from '@storybook/react'

import React from 'react'
import {ChakraProvider, CSSReset} from '@chakra-ui/react'
import theme from '../src/theme'
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

const withChakra = (StoryFn) => (
  <React.StrictMode>
    <CSSReset/>
    <ChakraProvider theme={theme}>
      <StoryFn />
    </ChakraProvider>
  </React.StrictMode>
)

export const decorators = [ withChakra, withPerformance ]