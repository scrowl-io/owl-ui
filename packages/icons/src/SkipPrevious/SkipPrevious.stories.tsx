import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SkipPrevious';
import descriptionMd from './Description.md';

export { SkipPrevious } from './stories/SkipPrevious-index.stories';

export default {
  title: 'Components/Icons/SkipPrevious',
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
