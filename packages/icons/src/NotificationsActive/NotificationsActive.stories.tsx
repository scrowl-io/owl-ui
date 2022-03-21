import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './NotificationsActive';
import descriptionMd from './Description.md';

export { NotificationsActive } from './stories/NotificationsActive-index.stories';

export default {
  title: 'Components/Icons/NotificationsActive',
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
