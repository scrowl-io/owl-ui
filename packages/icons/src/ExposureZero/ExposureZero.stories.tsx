import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ExposureZero';
import descriptionMd from './Description.md';

export { ExposureZero } from './stories/ExposureZero-index.stories';

export default {
  title: 'Components/Icons/ExposureZero',
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
