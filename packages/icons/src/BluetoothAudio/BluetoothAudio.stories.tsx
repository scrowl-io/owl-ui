import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BluetoothAudio';
import descriptionMd from './Description.md';

export { BluetoothAudio } from './stories/BluetoothAudio-index.stories';

export default {
  title: 'Components/Icons/BluetoothAudio',
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
