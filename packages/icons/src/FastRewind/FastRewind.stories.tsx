import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FastRewind';
import descriptionMd from './Description.md';

export { FastRewind } from './stories/FastRewind-index.stories';

export default {
  title: 'Components/Icons/FastRewind',
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
