import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CropLandscape';
import descriptionMd from './Description.md';

export { CropLandscape } from './stories/CropLandscape-index.stories';

export default {
  title: 'Components/Icons/CropLandscape',
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
