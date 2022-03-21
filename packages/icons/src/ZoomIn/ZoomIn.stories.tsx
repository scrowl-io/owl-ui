import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ZoomIn';
import descriptionMd from './Description.md';

export { ZoomIn } from './stories/ZoomIn-index.stories';

export default {
  title: 'Components/Icons/ZoomIn',
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
