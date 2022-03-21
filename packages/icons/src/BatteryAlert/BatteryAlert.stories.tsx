import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BatteryAlert';
import descriptionMd from './Description.md';

export { BatteryAlert } from './stories/BatteryAlert-index.stories';

export default {
  title: 'Components/Icons/BatteryAlert',
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
