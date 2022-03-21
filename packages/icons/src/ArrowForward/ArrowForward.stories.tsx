import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ArrowForward';
import descriptionMd from './Description.md';

export { ArrowForward } from './stories/ArrowForward-index.stories';

export default {
  title: 'Components/Icons/ArrowForward',
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
