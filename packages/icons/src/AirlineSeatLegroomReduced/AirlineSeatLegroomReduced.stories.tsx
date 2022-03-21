import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AirlineSeatLegroomReduced';
import descriptionMd from './Description.md';

export { AirlineSeatLegroomReduced } from './stories/AirlineSeatLegroomReduced-index.stories';

export default {
  title: 'Components/Icons/AirlineSeatLegroomReduced',
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
