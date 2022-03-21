import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BubbleChart';
import descriptionMd from './Description.md';

export { BubbleChart } from './stories/BubbleChart-index.stories';

export default {
  title: 'Components/Icons/BubbleChart',
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
