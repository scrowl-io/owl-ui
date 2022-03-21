import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './MovieFilter';
import descriptionMd from './Description.md';

export { MovieFilter } from './stories/MovieFilter-index.stories';

export default {
  title: 'Components/Icons/MovieFilter',
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
