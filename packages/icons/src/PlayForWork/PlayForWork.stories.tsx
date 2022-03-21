import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PlayForWork';
import descriptionMd from './Description.md';

export { PlayForWork } from './stories/PlayForWork-index.stories';

export default {
  title: 'Components/Icons/PlayForWork',
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
