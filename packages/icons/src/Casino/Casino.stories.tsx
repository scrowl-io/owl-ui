import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Casino';
import descriptionMd from './Description.md';

export { Casino } from './stories/Casino-index.stories';

export default {
  title: 'Components/Icons/Casino',
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
