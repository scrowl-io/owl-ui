import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AssignmentTurnedIn';
import descriptionMd from './Description.md';

export { AssignmentTurnedIn } from './stories/AssignmentTurnedIn-index.stories';

export default {
  title: 'Components/Icons/AssignmentTurnedIn',
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
