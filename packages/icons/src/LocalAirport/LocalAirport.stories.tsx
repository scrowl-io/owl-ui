import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocalAirport';
import descriptionMd from './Description.md';

export { LocalAirport } from './stories/LocalAirport-index.stories';

export default {
  title: 'Components/Icons/LocalAirport',
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
