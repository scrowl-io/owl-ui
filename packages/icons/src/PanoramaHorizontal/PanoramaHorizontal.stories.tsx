import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PanoramaHorizontal';
import descriptionMd from './Description.md';

export { PanoramaHorizontal } from './stories/PanoramaHorizontal-index.stories';

export default {
  title: 'Components/Icons/PanoramaHorizontal',
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
