import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AssignmentReturned';
import descriptionMd from './Description.md';

export { AssignmentReturned } from './stories/AssignmentReturned-index.stories';

export default {
  title: 'Components/Icons/AssignmentReturned',
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
