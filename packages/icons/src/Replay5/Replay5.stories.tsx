import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Replay5';
import descriptionMd from './Description.md';

export { Replay5 } from './stories/Replay5-index.stories';

export default {
  title: 'Components/Icons/Replay5',
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
