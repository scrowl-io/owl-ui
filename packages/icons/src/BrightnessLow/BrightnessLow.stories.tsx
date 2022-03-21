import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BrightnessLow';
import descriptionMd from './Description.md';

export { BrightnessLow } from './stories/BrightnessLow-index.stories';

export default {
  title: 'Components/Icons/BrightnessLow',
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
