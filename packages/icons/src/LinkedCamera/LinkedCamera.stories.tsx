import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LinkedCamera';
import descriptionMd from './Description.md';

export { LinkedCamera } from './stories/LinkedCamera-index.stories';

export default {
  title: 'Components/Icons/LinkedCamera',
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
