import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SignalCellularConnectedNoInternet4Bar';
import descriptionMd from './Description.md';

export { SignalCellularConnectedNoInternet4Bar } from './stories/SignalCellularConnectedNoInternet4Bar-index.stories';

export default {
  title: 'Components/Icons/SignalCellularConnectedNoInternet4Bar',
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
