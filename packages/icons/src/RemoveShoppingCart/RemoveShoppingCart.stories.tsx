import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './RemoveShoppingCart';
import descriptionMd from './Description.md';

export { RemoveShoppingCart } from './stories/RemoveShoppingCart-index.stories';

export default {
  title: 'Components/Icons/RemoveShoppingCart',
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
