import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CropRotate';
import descriptionMd from './Description.md';

export { CropRotate } from './stories/CropRotate-index.stories';

export default {
  title: 'Components/Icons/CropRotate',
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
