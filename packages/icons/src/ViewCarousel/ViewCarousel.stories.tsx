import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ViewCarousel';
import descriptionMd from './Description.md';

export { ViewCarousel } from './stories/ViewCarousel-index.stories';

export default {
  title: 'Components/Icons/ViewCarousel',
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
