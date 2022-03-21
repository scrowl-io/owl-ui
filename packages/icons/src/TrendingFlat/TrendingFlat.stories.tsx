import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './TrendingFlat';
import descriptionMd from './Description.md';

export { TrendingFlat } from './stories/TrendingFlat-index.stories';

export default {
  title: 'Components/Icons/TrendingFlat',
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
