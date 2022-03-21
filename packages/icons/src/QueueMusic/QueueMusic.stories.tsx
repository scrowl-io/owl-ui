import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './QueueMusic';
import descriptionMd from './Description.md';

export { QueueMusic } from './stories/QueueMusic-index.stories';

export default {
  title: 'Components/Icons/QueueMusic',
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
