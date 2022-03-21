import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocalGroceryStore';
import descriptionMd from './Description.md';

export { LocalGroceryStore } from './stories/LocalGroceryStore-index.stories';

export default {
  title: 'Components/Icons/LocalGroceryStore',
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
