import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AddShoppingCart';
import descriptionMd from './Description.md';

export { AddShoppingCart } from './stories/AddShoppingCart-index.stories';

export default {
  title: 'Components/Icons/AddShoppingCart',
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
