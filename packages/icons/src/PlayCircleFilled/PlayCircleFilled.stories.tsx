import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PlayCircleFilled';
import descriptionMd from './Description.md';

export { PlayCircleFilled } from './stories/PlayCircleFilled-index.stories';

export default {
  title: 'Components/Icons/PlayCircleFilled',
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
