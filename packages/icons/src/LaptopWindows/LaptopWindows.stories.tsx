import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LaptopWindows';
import descriptionMd from './Description.md';

export { LaptopWindows } from './stories/LaptopWindows-index.stories';

export default {
  title: 'Components/Icons/LaptopWindows',
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
