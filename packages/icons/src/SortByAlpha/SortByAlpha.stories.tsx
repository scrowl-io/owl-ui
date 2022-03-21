import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SortByAlpha';
import descriptionMd from './Description.md';

export { SortByAlpha } from './stories/SortByAlpha-index.stories';

export default {
  title: 'Components/Icons/SortByAlpha',
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
