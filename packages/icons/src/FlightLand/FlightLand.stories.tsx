import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FlightLand';
import descriptionMd from './Description.md';

export { FlightLand } from './stories/FlightLand-index.stories';

export default {
  title: 'Components/Icons/FlightLand',
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
