import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Reorder';
import descriptionMd from './Description.md';

export { Reorder } from './stories/Reorder-index.stories';

export default {
  title: 'Components/Icons/Reorder',
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
