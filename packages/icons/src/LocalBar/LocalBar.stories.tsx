import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocalBar';
import descriptionMd from './Description.md';

export { LocalBar } from './stories/LocalBar-index.stories';

export default {
  title: 'Components/Icons/LocalBar',
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
