import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Replay';
import descriptionMd from './Description.md';

export { Replay } from './stories/Replay-index.stories';

export default {
  title: 'Components/Icons/Replay',
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
