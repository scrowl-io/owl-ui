import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SignalWifiOff';
import descriptionMd from './Description.md';

export { SignalWifiOff } from './stories/SignalWifiOff-index.stories';

export default {
  title: 'Components/Icons/SignalWifiOff',
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
