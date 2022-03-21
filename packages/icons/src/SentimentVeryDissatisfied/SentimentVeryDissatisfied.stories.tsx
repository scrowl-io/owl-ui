import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SentimentVeryDissatisfied';
import descriptionMd from './Description.md';

export { SentimentVeryDissatisfied } from './stories/SentimentVeryDissatisfied-index.stories';

export default {
  title: 'Components/Icons/SentimentVeryDissatisfied',
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
