import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Inbox';
import descriptionMd from './Description.md';

export { Inbox } from './stories/Inbox-index.stories';

export default {
  title: 'Components/Icons/Inbox',
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
