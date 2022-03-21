import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FilterFrames';
import descriptionMd from './Description.md';

export { FilterFrames } from './stories/FilterFrames-index.stories';

export default {
  title: 'Components/Icons/FilterFrames',
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
