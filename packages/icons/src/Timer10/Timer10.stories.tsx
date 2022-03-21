import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Timer10';
import descriptionMd from './Description.md';

export { Timer10 } from './stories/Timer10-index.stories';

export default {
  title: 'Components/Icons/Timer10',
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
