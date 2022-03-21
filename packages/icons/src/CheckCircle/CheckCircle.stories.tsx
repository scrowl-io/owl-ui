import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CheckCircle';
import descriptionMd from './Description.md';

export { CheckCircle } from './stories/CheckCircle-index.stories';

export default {
  title: 'Components/Icons/CheckCircle',
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
