import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ThumbsUpDown';
import descriptionMd from './Description.md';

export { ThumbsUpDown } from './stories/ThumbsUpDown-index.stories';

export default {
  title: 'Components/Icons/ThumbsUpDown',
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
