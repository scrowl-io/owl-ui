import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LockOutline';
import descriptionMd from './Description.md';

export { LockOutline } from './stories/LockOutline-index.stories';

export default {
  title: 'Components/Icons/LockOutline',
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
