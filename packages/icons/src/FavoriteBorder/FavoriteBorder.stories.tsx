import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FavoriteBorder';
import descriptionMd from './Description.md';

export { FavoriteBorder } from './stories/FavoriteBorder-index.stories';

export default {
  title: 'Components/Icons/FavoriteBorder',
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
