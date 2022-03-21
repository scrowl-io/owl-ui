import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Star';
import descriptionMd from './Description.md';

export { Star } from './stories/Star-index.stories';

export default {
  title: 'Components/Icons/Star',
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
