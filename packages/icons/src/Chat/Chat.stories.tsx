import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Chat';
import descriptionMd from './Description.md';

export { Chat } from './stories/Chat-index.stories';

export default {
  title: 'Components/Icons/Chat',
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
