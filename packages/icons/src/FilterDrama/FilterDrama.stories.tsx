import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FilterDrama';
import descriptionMd from './Description.md';

export { FilterDrama } from './stories/FilterDrama-index.stories';

export default {
  title: 'Components/Icons/FilterDrama',
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
