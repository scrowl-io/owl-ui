import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocalHotel';
import descriptionMd from './Description.md';

export { LocalHotel } from './stories/LocalHotel-index.stories';

export default {
  title: 'Components/Icons/LocalHotel',
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
