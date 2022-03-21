import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Timer';
import descriptionMd from './Description.md';

export { Timer } from './stories/Timer-index.stories';

export default {
  title: 'Components/Icons/Timer',
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
