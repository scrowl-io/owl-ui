import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './StarHalf';
import descriptionMd from './Description.md';

export { StarHalf } from './stories/StarHalf-index.stories';

export default {
  title: 'Components/Icons/StarHalf',
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
