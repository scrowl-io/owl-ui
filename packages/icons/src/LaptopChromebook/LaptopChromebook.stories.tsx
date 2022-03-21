import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LaptopChromebook';
import descriptionMd from './Description.md';

export { LaptopChromebook } from './stories/LaptopChromebook-index.stories';

export default {
  title: 'Components/Icons/LaptopChromebook',
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
