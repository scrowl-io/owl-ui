import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DirectionsRun';
import descriptionMd from './Description.md';

export { DirectionsRun } from './stories/DirectionsRun-index.stories';

export default {
  title: 'Components/Icons/DirectionsRun',
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
