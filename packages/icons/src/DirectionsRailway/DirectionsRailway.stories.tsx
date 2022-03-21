import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DirectionsRailway';
import descriptionMd from './Description.md';

export { DirectionsRailway } from './stories/DirectionsRailway-index.stories';

export default {
  title: 'Components/Icons/DirectionsRailway',
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
