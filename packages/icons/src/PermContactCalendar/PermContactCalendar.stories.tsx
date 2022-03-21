import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PermContactCalendar';
import descriptionMd from './Description.md';

export { PermContactCalendar } from './stories/PermContactCalendar-index.stories';

export default {
  title: 'Components/Icons/PermContactCalendar',
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
