import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocalFlorist';
import descriptionMd from './Description.md';

export { LocalFlorist } from './stories/LocalFlorist-index.stories';

export default {
  title: 'Components/Icons/LocalFlorist',
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
