import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LaptopMac';
import descriptionMd from './Description.md';

export { LaptopMac } from './stories/LaptopMac-index.stories';

export default {
  title: 'Components/Icons/LaptopMac',
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
