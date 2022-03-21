import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Subscriptions';
import descriptionMd from './Description.md';

export { Subscriptions } from './stories/Subscriptions-index.stories';

export default {
  title: 'Components/Icons/Subscriptions',
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
