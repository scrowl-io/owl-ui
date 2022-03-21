import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './NotificationsOff';
import descriptionMd from './Description.md';

export { NotificationsOff } from './stories/NotificationsOff-index.stories';

export default {
  title: 'Components/Icons/NotificationsOff',
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
