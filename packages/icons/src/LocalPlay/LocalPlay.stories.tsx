import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocalPlay';
import descriptionMd from './Description.md';

export { LocalPlay } from './stories/LocalPlay-index.stories';

export default {
  title: 'Components/Icons/LocalPlay',
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
