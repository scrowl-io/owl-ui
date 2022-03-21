import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './NotificationsPaused';
import descriptionMd from './Description.md';

export { NotificationsPaused } from './stories/NotificationsPaused-index.stories';

export default {
  title: 'Components/Icons/NotificationsPaused',
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
