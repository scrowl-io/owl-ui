import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Snooze';
import descriptionMd from './Description.md';

export { Snooze } from './stories/Snooze-index.stories';

export default {
  title: 'Components/Icons/Snooze',
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
