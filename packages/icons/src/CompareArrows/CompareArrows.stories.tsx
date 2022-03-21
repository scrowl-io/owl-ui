import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CompareArrows';
import descriptionMd from './Description.md';

export { CompareArrows } from './stories/CompareArrows-index.stories';

export default {
  title: 'Components/Icons/CompareArrows',
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
