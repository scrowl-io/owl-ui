import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AirlineSeatIndividualSuite';
import descriptionMd from './Description.md';

export { AirlineSeatIndividualSuite } from './stories/AirlineSeatIndividualSuite-index.stories';

export default {
  title: 'Components/Icons/AirlineSeatIndividualSuite',
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
