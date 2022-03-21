import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './RotateRight';
import descriptionMd from './Description.md';

export { RotateRight } from './stories/RotateRight-index.stories';

export default {
  title: 'Components/Icons/RotateRight',
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
