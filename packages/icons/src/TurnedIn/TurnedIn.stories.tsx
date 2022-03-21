import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './TurnedIn';
import descriptionMd from './Description.md';

export { TurnedIn } from './stories/TurnedIn-index.stories';

export default {
  title: 'Components/Icons/TurnedIn',
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
