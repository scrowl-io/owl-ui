import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Send';
import descriptionMd from './Description.md';

export { Send } from './stories/Send-index.stories';

export default {
  title: 'Components/Icons/Send',
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
