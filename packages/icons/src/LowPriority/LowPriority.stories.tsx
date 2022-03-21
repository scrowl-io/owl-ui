import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LowPriority';
import descriptionMd from './Description.md';

export { LowPriority } from './stories/LowPriority-index.stories';

export default {
  title: 'Components/Icons/LowPriority',
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
