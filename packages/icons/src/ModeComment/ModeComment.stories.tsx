import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ModeComment';
import descriptionMd from './Description.md';

export { ModeComment } from './stories/ModeComment-index.stories';

export default {
  title: 'Components/Icons/ModeComment',
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
