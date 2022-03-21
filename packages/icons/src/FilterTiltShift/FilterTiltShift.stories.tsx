import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FilterTiltShift';
import descriptionMd from './Description.md';

export { FilterTiltShift } from './stories/FilterTiltShift-index.stories';

export default {
  title: 'Components/Icons/FilterTiltShift',
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
