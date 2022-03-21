import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CloudCircle';
import descriptionMd from './Description.md';

export { CloudCircle } from './stories/CloudCircle-index.stories';

export default {
  title: 'Components/Icons/CloudCircle',
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
