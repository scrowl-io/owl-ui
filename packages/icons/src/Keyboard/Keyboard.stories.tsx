import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Keyboard';
import descriptionMd from './Description.md';

export { Keyboard } from './stories/Keyboard-index.stories';

export default {
  title: 'Components/Icons/Keyboard',
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
