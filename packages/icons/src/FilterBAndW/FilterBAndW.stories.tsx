import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FilterBAndW';
import descriptionMd from './Description.md';

export { FilterBAndW } from './stories/FilterBAndW-index.stories';

export default {
  title: 'Components/Icons/FilterBAndW',
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
