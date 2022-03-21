import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SyncProblem';
import descriptionMd from './Description.md';

export { SyncProblem } from './stories/SyncProblem-index.stories';

export default {
  title: 'Components/Icons/SyncProblem',
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
