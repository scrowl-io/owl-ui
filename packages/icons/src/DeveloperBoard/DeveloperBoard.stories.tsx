import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DeveloperBoard';
import descriptionMd from './Description.md';

export { DeveloperBoard } from './stories/DeveloperBoard-index.stories';

export default {
  title: 'Components/Icons/DeveloperBoard',
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
