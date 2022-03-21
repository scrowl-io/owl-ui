import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PanoramaWideAngle';
import descriptionMd from './Description.md';

export { PanoramaWideAngle } from './stories/PanoramaWideAngle-index.stories';

export default {
  title: 'Components/Icons/PanoramaWideAngle',
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
