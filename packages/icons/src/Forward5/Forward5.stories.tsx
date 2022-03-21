import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Forward5';
import descriptionMd from './Description.md';

export { Forward5 } from './stories/Forward5-index.stories';

export default {
  title: 'Components/Icons/Forward5',
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
