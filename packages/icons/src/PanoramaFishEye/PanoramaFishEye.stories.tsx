import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PanoramaFishEye';
import descriptionMd from './Description.md';

export { PanoramaFishEye } from './stories/PanoramaFishEye-index.stories';

export default {
  title: 'Components/Icons/PanoramaFishEye',
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
