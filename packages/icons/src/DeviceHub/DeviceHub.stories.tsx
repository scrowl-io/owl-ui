import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DeviceHub';
import descriptionMd from './Description.md';

export { DeviceHub } from './stories/DeviceHub-index.stories';

export default {
  title: 'Components/Icons/DeviceHub',
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
