import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './QueuePlayNext';
import descriptionMd from './Description.md';

export { QueuePlayNext } from './stories/QueuePlayNext-index.stories';

export default {
  title: 'Components/Icons/QueuePlayNext',
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
