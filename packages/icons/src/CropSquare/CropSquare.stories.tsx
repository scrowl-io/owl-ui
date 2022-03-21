import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CropSquare';
import descriptionMd from './Description.md';

export { CropSquare } from './stories/CropSquare-index.stories';

export default {
  title: 'Components/Icons/CropSquare',
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
