import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Forward';
import descriptionMd from './Description.md';

export { Forward } from './stories/Forward-index.stories';

export default {
  title: 'Components/Icons/Forward',
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
