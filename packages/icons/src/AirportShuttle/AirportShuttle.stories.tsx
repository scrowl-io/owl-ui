import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AirportShuttle';
import descriptionMd from './Description.md';

export { AirportShuttle } from './stories/AirportShuttle-index.stories';

export default {
  title: 'Components/Icons/AirportShuttle',
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
