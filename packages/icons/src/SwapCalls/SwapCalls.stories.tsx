import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SwapCalls';
import descriptionMd from './Description.md';

export { SwapCalls } from './stories/SwapCalls-index.stories';

export default {
  title: 'Components/Icons/SwapCalls',
  component: Component,
  parameters: {
    docs: {
      description: {
        component: [descriptionMd].join('/n'),
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;
