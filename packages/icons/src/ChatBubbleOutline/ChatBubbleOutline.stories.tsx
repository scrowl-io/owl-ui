import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ChatBubbleOutline';
import descriptionMd from './Description.md';

export { ChatBubbleOutline } from './stories/ChatBubbleOutline-index.stories';

export default {
  title: 'Components/Icons/ChatBubbleOutline',
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
