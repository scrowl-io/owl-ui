import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './GpsFixed';
import descriptionMd from './Description.md';

export { GpsFixed } from './stories/GpsFixed-index.stories';

export default {
  title: 'Components/Icons/GpsFixed',
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
