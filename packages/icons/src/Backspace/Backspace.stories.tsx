import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Backspace';
import descriptionMd from './Description.md';

export { Backspace } from './stories/Backspace-index.stories';

export default {
  title: 'Components/Icons/Backspace',
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
