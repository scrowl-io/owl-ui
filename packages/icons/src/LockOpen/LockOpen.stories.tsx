import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LockOpen';
import descriptionMd from './Description.md';

export { LockOpen } from './stories/LockOpen-index.stories';

export default {
  title: 'Components/Icons/LockOpen',
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
