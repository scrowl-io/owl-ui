import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ExposureNeg2';
import descriptionMd from './Description.md';

export { ExposureNeg2 } from './stories/ExposureNeg2-index.stories';

export default {
  title: 'Components/Icons/ExposureNeg2',
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
