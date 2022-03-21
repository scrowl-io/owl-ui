import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ShowChart';
import descriptionMd from './Description.md';

export { ShowChart } from './stories/ShowChart-index.stories';

export default {
  title: 'Components/Icons/ShowChart',
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
