import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Timer3';
import descriptionMd from './Description.md';

export { Timer3 } from './stories/Timer3-index.stories';

export default {
  title: 'Components/Icons/Timer3',
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
