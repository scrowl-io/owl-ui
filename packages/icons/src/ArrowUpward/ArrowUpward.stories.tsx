import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ArrowUpward';
import descriptionMd from './Description.md';

export { ArrowUpward } from './stories/ArrowUpward-index.stories';

export default {
  title: 'Components/Icons/ArrowUpward',
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
