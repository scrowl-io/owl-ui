import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DirectionsTransit';
import descriptionMd from './Description.md';

export { DirectionsTransit } from './stories/DirectionsTransit-index.stories';

export default {
  title: 'Components/Icons/DirectionsTransit',
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
