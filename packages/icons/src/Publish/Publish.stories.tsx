import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Publish';
import descriptionMd from './Description.md';

export { Publish } from './stories/Publish-index.stories';

export default {
  title: 'Components/Icons/Publish',
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
