import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './EventBusy';
import descriptionMd from './Description.md';

export { EventBusy } from './stories/EventBusy-index.stories';

export default {
  title: 'Components/Icons/EventBusy',
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
