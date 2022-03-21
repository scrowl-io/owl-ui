import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './RotateLeft';
import descriptionMd from './Description.md';

export { RotateLeft } from './stories/RotateLeft-index.stories';

export default {
  title: 'Components/Icons/RotateLeft',
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
