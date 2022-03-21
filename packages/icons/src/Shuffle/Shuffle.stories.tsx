import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Shuffle';
import descriptionMd from './Description.md';

export { Shuffle } from './stories/Shuffle-index.stories';

export default {
  title: 'Components/Icons/Shuffle',
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
