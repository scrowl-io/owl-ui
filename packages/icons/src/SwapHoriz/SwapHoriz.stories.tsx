import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SwapHoriz';
import descriptionMd from './Description.md';

export { SwapHoriz } from './stories/SwapHoriz-index.stories';

export default {
  title: 'Components/Icons/SwapHoriz',
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
