import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './HdrStrong';
import descriptionMd from './Description.md';

export { HdrStrong } from './stories/HdrStrong-index.stories';

export default {
  title: 'Components/Icons/HdrStrong',
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
