import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AirlineSeatLegroomNormal';
import descriptionMd from './Description.md';

export { AirlineSeatLegroomNormal } from './stories/AirlineSeatLegroomNormal-index.stories';

export default {
  title: 'Components/Icons/AirlineSeatLegroomNormal',
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
