import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './RecentActors';
import descriptionMd from './Description.md';

export { RecentActors } from './stories/RecentActors-index.stories';

export default {
  title: 'Components/Icons/RecentActors',
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
