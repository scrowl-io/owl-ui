import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Cached';
import descriptionMd from './Description.md';

export { Cached } from './stories/Cached-index.stories';

export default {
  title: 'Components/Icons/Cached',
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
