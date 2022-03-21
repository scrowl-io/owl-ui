import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CropDin';
import descriptionMd from './Description.md';

export { CropDin } from './stories/CropDin-index.stories';

export default {
  title: 'Components/Icons/CropDin',
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
