import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BrightnessAuto';
import descriptionMd from './Description.md';

export { BrightnessAuto } from './stories/BrightnessAuto-index.stories';

export default {
  title: 'Components/Icons/BrightnessAuto',
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
