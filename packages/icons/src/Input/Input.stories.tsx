import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Input';
import descriptionMd from './Description.md';

export { Input } from './stories/Input-index.stories';

export default {
  title: 'Components/Icons/Input',
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
