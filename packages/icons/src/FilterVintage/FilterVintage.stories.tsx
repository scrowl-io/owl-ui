import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FilterVintage';
import descriptionMd from './Description.md';

export { FilterVintage } from './stories/FilterVintage-index.stories';

export default {
  title: 'Components/Icons/FilterVintage',
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
