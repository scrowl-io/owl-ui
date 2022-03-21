import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Power';
import descriptionMd from './Description.md';

export { Power } from './stories/Power-index.stories';

export default {
  title: 'Components/Icons/Power',
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
