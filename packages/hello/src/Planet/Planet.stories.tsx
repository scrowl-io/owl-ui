import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Planet';
import descriptionMd from './Description.md';

export { Planet } from './stories/Planet-index.stories';

export default {
  title: 'Components/Hello/Planet',
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
