import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Notifications';
import descriptionMd from './Description.md';

export { Notifications } from './stories/Notifications-index.stories';

export default {
  title: 'Components/Icons/Notifications',
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
