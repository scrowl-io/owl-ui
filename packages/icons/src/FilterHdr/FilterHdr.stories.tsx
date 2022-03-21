import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FilterHdr';
import descriptionMd from './Description.md';

export { FilterHdr } from './stories/FilterHdr-index.stories';

export default {
  title: 'Components/Icons/FilterHdr',
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
