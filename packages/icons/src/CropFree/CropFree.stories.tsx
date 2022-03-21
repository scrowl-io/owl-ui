import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CropFree';
import descriptionMd from './Description.md';

export { CropFree } from './stories/CropFree-index.stories';

export default {
  title: 'Components/Icons/CropFree',
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
