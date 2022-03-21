import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Nature';
import descriptionMd from './Description.md';

export { Nature } from './stories/Nature-index.stories';

export default {
  title: 'Components/Icons/Nature',
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
