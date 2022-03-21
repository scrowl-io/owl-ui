import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './RemoveFromQueue';
import descriptionMd from './Description.md';

export { RemoveFromQueue } from './stories/RemoveFromQueue-index.stories';

export default {
  title: 'Components/Icons/RemoveFromQueue',
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
