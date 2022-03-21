import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './NotificationsNone';
import descriptionMd from './Description.md';

export { NotificationsNone } from './stories/NotificationsNone-index.stories';

export default {
  title: 'Components/Icons/NotificationsNone',
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
