import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SignalWifi4BarLock';
import descriptionMd from './Description.md';

export { SignalWifi4BarLock } from './stories/SignalWifi4BarLock-index.stories';

export default {
  title: 'Components/Icons/SignalWifi4BarLock',
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
