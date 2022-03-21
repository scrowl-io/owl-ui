import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Directions';
import descriptionMd from './Description.md';

export { Directions } from './stories/Directions-index.stories';

export default {
  title: 'Components/Icons/Directions',
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
