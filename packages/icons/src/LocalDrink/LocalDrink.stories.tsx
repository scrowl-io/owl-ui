import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocalDrink';
import descriptionMd from './Description.md';

export { LocalDrink } from './stories/LocalDrink-index.stories';

export default {
  title: 'Components/Icons/LocalDrink',
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
