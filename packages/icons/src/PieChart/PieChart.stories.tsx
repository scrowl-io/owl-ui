import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PieChart';
import descriptionMd from './Description.md';

export { PieChart } from './stories/PieChart-index.stories';

export default {
  title: 'Components/Icons/PieChart',
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
