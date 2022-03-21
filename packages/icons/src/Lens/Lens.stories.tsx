import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Lens';
import descriptionMd from './Description.md';

export { Lens } from './stories/Lens-index.stories';

export default {
  title: 'Components/Icons/Lens',
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
