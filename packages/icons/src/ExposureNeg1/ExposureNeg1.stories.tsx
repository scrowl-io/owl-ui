import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ExposureNeg1';
import descriptionMd from './Description.md';

export { ExposureNeg1 } from './stories/ExposureNeg1-index.stories';

export default {
  title: 'Components/Icons/ExposureNeg1',
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
