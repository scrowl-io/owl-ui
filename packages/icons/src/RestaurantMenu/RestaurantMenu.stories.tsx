import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './RestaurantMenu';
import descriptionMd from './Description.md';

export { RestaurantMenu } from './stories/RestaurantMenu-index.stories';

export default {
  title: 'Components/Icons/RestaurantMenu',
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
