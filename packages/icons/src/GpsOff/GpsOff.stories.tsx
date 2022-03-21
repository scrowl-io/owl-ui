import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './GpsOff';
import descriptionMd from './Description.md';

export { GpsOff } from './stories/GpsOff-index.stories';

export default {
  title: 'Components/Icons/GpsOff',
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
