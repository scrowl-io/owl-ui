import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BatteryUnknown';
import descriptionMd from './Description.md';

export { BatteryUnknown } from './stories/BatteryUnknown-index.stories';

export default {
  title: 'Components/Icons/BatteryUnknown',
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
