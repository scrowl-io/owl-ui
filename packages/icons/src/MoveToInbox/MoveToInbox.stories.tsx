import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './MoveToInbox';
import descriptionMd from './Description.md';

export { MoveToInbox } from './stories/MoveToInbox-index.stories';

export default {
  title: 'Components/Icons/MoveToInbox',
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
