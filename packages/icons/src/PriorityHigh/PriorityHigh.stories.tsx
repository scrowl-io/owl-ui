import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PriorityHigh';
import descriptionMd from './Description.md';

export { PriorityHigh } from './stories/PriorityHigh-index.stories';

export default {
  title: 'Components/Icons/PriorityHigh',
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
