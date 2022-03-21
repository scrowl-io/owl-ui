import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DirectionsWalk';
import descriptionMd from './Description.md';

export { DirectionsWalk } from './stories/DirectionsWalk-index.stories';

export default {
  title: 'Components/Icons/DirectionsWalk',
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
