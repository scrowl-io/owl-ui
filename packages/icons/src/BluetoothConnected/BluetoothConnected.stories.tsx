import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BluetoothConnected';
import descriptionMd from './Description.md';

export { BluetoothConnected } from './stories/BluetoothConnected-index.stories';

export default {
  title: 'Components/Icons/BluetoothConnected',
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
