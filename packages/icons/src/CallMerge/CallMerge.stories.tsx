import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CallMerge';
import descriptionMd from './Description.md';

export { CallMerge } from './stories/CallMerge-index.stories';

export default {
  title: 'Components/Icons/CallMerge',
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
