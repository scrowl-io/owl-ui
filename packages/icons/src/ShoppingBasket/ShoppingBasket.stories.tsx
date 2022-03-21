import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ShoppingBasket';
import descriptionMd from './Description.md';

export { ShoppingBasket } from './stories/ShoppingBasket-index.stories';

export default {
  title: 'Components/Icons/ShoppingBasket',
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
