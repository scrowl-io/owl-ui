import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BatteryChargingFull';
import descriptionMd from './Description.md';

export { BatteryChargingFull } from './stories/BatteryChargingFull-index.stories';

export default {
  title: 'Components/Icons/BatteryChargingFull',
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
