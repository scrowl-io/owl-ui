import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './RemoveCircleOutline';
import descriptionMd from './Description.md';

export { RemoveCircleOutline } from './stories/RemoveCircleOutline-index.stories';

export default {
  title: 'Components/Icons/RemoveCircleOutline',
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
