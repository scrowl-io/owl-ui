import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SignalWifi4Bar';
import descriptionMd from './Description.md';

export { SignalWifi4Bar } from './stories/SignalWifi4Bar-index.stories';

export default {
  title: 'Components/Icons/SignalWifi4Bar',
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
