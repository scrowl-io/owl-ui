import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ZoomOut';
import descriptionMd from './Description.md';

export { ZoomOut } from './stories/ZoomOut-index.stories';

export default {
  title: 'Components/Icons/ZoomOut',
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
