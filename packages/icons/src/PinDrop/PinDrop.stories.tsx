import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PinDrop';
import descriptionMd from './Description.md';

export { PinDrop } from './stories/PinDrop-index.stories';

export default {
  title: 'Components/Icons/PinDrop',
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
