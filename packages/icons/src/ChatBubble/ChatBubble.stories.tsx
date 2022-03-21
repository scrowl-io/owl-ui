import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ChatBubble';
import descriptionMd from './Description.md';

export { ChatBubble } from './stories/ChatBubble-index.stories';

export default {
  title: 'Components/Icons/ChatBubble',
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
