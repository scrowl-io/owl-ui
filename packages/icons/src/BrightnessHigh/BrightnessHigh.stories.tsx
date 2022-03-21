import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BrightnessHigh';
import descriptionMd from './Description.md';

export { BrightnessHigh } from './stories/BrightnessHigh-index.stories';

export default {
  title: 'Components/Icons/BrightnessHigh',
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
