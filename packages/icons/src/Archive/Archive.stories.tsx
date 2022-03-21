import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Archive';
import descriptionMd from './Description.md';

export { Archive } from './stories/Archive-index.stories';

export default {
  title: 'Components/Icons/Archive',
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
