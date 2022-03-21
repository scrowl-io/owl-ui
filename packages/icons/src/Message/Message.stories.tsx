import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Message';
import descriptionMd from './Description.md';

export { Message } from './stories/Message-index.stories';

export default {
  title: 'Components/Icons/Message',
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
