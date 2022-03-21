import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FitnessCenter';
import descriptionMd from './Description.md';

export { FitnessCenter } from './stories/FitnessCenter-index.stories';

export default {
  title: 'Components/Icons/FitnessCenter',
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
