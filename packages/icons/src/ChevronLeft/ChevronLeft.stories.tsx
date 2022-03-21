import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ChevronLeft';
import descriptionMd from './Description.md';

export { ChevronLeft } from './stories/ChevronLeft-index.stories';

export default {
  title: 'Components/Icons/ChevronLeft',
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
