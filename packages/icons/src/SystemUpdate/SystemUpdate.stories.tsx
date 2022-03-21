import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SystemUpdate';
import descriptionMd from './Description.md';

export { SystemUpdate } from './stories/SystemUpdate-index.stories';

export default {
  title: 'Components/Icons/SystemUpdate',
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
