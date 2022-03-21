import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ViewStream';
import descriptionMd from './Description.md';

export { ViewStream } from './stories/ViewStream-index.stories';

export default {
  title: 'Components/Icons/ViewStream',
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
