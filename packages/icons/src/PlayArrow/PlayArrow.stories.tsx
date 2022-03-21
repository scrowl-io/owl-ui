import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PlayArrow';
import descriptionMd from './Description.md';

export { PlayArrow } from './stories/PlayArrow-index.stories';

export default {
  title: 'Components/Icons/PlayArrow',
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
