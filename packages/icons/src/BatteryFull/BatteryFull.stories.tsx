import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BatteryFull';
import descriptionMd from './Description.md';

export { BatteryFull } from './stories/BatteryFull-index.stories';

export default {
  title: 'Components/Icons/BatteryFull',
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
