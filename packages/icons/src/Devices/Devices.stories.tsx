import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Devices';
import descriptionMd from './Description.md';

export { Devices } from './stories/Devices-index.stories';

export default {
  title: 'Components/Icons/Devices',
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
