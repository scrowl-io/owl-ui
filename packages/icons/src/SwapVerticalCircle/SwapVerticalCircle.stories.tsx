import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SwapVerticalCircle';
import descriptionMd from './Description.md';

export { SwapVerticalCircle } from './stories/SwapVerticalCircle-index.stories';

export default {
  title: 'Components/Icons/SwapVerticalCircle',
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
