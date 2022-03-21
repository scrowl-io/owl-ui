import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Cast';
import descriptionMd from './Description.md';

export { Cast } from './stories/Cast-index.stories';

export default {
  title: 'Components/Icons/Cast',
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
