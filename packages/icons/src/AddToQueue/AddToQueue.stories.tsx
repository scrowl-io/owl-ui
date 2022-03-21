import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AddToQueue';
import descriptionMd from './Description.md';

export { AddToQueue } from './stories/AddToQueue-index.stories';

export default {
  title: 'Components/Icons/AddToQueue',
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
