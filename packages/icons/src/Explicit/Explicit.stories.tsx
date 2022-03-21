import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Explicit';
import descriptionMd from './Description.md';

export { Explicit } from './stories/Explicit-index.stories';

export default {
  title: 'Components/Icons/Explicit',
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
