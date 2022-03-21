import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SurroundSound';
import descriptionMd from './Description.md';

export { SurroundSound } from './stories/SurroundSound-index.stories';

export default {
  title: 'Components/Icons/SurroundSound',
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
