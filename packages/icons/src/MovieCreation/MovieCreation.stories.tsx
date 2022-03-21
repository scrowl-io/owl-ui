import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './MovieCreation';
import descriptionMd from './Description.md';

export { MovieCreation } from './stories/MovieCreation-index.stories';

export default {
  title: 'Components/Icons/MovieCreation',
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
