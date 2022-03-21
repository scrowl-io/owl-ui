import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ChildFriendly';
import descriptionMd from './Description.md';

export { ChildFriendly } from './stories/ChildFriendly-index.stories';

export default {
  title: 'Components/Icons/ChildFriendly',
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
