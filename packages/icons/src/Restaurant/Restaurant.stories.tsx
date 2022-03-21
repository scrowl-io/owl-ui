import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Restaurant';
import descriptionMd from './Description.md';

export { Restaurant } from './stories/Restaurant-index.stories';

export default {
  title: 'Components/Icons/Restaurant',
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
