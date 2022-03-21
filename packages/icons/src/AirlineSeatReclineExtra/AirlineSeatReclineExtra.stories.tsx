import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AirlineSeatReclineExtra';
import descriptionMd from './Description.md';

export { AirlineSeatReclineExtra } from './stories/AirlineSeatReclineExtra-index.stories';

export default {
  title: 'Components/Icons/AirlineSeatReclineExtra',
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
