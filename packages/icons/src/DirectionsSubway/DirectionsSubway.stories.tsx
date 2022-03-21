import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DirectionsSubway';
import descriptionMd from './Description.md';

export { DirectionsSubway } from './stories/DirectionsSubway-index.stories';

export default {
  title: 'Components/Icons/DirectionsSubway',
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
