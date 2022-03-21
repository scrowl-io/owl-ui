import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './NoSim';
import descriptionMd from './Description.md';

export { NoSim } from './stories/NoSim-index.stories';

export default {
  title: 'Components/Icons/NoSim',
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
