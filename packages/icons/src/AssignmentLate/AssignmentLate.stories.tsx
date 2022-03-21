import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AssignmentLate';
import descriptionMd from './Description.md';

export { AssignmentLate } from './stories/AssignmentLate-index.stories';

export default {
  title: 'Components/Icons/AssignmentLate',
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
