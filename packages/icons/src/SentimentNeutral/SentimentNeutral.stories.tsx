import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SentimentNeutral';
import descriptionMd from './Description.md';

export { SentimentNeutral } from './stories/SentimentNeutral-index.stories';

export default {
  title: 'Components/Icons/SentimentNeutral',
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
