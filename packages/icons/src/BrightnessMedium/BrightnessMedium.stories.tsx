import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BrightnessMedium';
import descriptionMd from './Description.md';

export { BrightnessMedium } from './stories/BrightnessMedium-index.stories';

export default {
  title: 'Components/Icons/BrightnessMedium',
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
