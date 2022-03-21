import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Favorite';
import descriptionMd from './Description.md';

export { Favorite } from './stories/Favorite-index.stories';

export default {
  title: 'Components/Icons/Favorite',
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
