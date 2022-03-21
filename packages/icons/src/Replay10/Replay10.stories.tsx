import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Replay10';
import descriptionMd from './Description.md';

export { Replay10 } from './stories/Replay10-index.stories';

export default {
  title: 'Components/Icons/Replay10',
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
