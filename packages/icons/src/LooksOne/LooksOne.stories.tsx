import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LooksOne';
import descriptionMd from './Description.md';

export { LooksOne } from './stories/LooksOne-index.stories';

export default {
  title: 'Components/Icons/LooksOne',
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
