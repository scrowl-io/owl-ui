import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Undo';
import descriptionMd from './Description.md';

export { Undo } from './stories/Undo-index.stories';

export default {
  title: 'Components/Icons/Undo',
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
