import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './KeyboardHide';
import descriptionMd from './Description.md';

export { KeyboardHide } from './stories/KeyboardHide-index.stories';

export default {
  title: 'Components/Icons/KeyboardHide',
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
