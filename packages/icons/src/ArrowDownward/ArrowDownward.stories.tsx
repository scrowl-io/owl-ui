import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ArrowDownward';
import descriptionMd from './Description.md';

export { ArrowDownward } from './stories/ArrowDownward-index.stories';

export default {
  title: 'Components/Icons/ArrowDownward',
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
