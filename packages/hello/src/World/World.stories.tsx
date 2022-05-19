import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './World';
import descriptionMd from './Description.md';

export { World } from './stories/World-index.stories';

export default {
  title: 'Components/Hello/World',
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
