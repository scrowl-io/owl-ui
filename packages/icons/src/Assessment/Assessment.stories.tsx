import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Assessment';
import descriptionMd from './Description.md';

export { Assessment } from './stories/Assessment-index.stories';

export default {
  title: 'Components/Icons/Assessment',
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
