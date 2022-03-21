import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Code';
import descriptionMd from './Description.md';

export { Code } from './stories/Code-index.stories';

export default {
  title: 'Components/Icons/Code',
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
