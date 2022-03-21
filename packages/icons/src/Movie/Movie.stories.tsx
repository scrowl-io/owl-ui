import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Movie';
import descriptionMd from './Description.md';

export { Movie } from './stories/Movie-index.stories';

export default {
  title: 'Components/Icons/Movie',
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
