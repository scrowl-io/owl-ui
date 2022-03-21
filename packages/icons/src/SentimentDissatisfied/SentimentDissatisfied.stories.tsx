import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SentimentDissatisfied';
import descriptionMd from './Description.md';

export { SentimentDissatisfied } from './stories/SentimentDissatisfied-index.stories';

export default {
  title: 'Components/Icons/SentimentDissatisfied',
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
