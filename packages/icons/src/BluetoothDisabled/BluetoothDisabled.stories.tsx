import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BluetoothDisabled';
import descriptionMd from './Description.md';

export { BluetoothDisabled } from './stories/BluetoothDisabled-index.stories';

export default {
  title: 'Components/Icons/BluetoothDisabled',
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
