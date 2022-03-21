import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Memory';
import descriptionMd from './Description.md';

export { Memory } from './stories/Memory-index.stories';

export default {
  title: 'Components/Icons/Memory',
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
