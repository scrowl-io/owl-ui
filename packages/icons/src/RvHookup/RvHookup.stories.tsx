import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './RvHookup';
import descriptionMd from './Description.md';

export { RvHookup } from './stories/RvHookup-index.stories';

export default {
  title: 'Components/Icons/RvHookup',
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
