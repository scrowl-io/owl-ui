import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Tv';
import descriptionMd from './Description.md';

export { Tv } from './stories/Tv-index.stories';

export default {
  title: 'Components/Icons/Tv',
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
