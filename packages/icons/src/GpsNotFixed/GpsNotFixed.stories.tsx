import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './GpsNotFixed';
import descriptionMd from './Description.md';

export { GpsNotFixed } from './stories/GpsNotFixed-index.stories';

export default {
  title: 'Components/Icons/GpsNotFixed',
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
