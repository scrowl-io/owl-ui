import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DonutLarge';
import descriptionMd from './Description.md';

export { DonutLarge } from './stories/DonutLarge-index.stories';

export default {
  title: 'Components/Icons/DonutLarge',
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
