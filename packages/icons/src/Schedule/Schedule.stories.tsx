import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Schedule';
import descriptionMd from './Description.md';

export { Schedule } from './stories/Schedule-index.stories';

export default {
  title: 'Components/Icons/Schedule',
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
