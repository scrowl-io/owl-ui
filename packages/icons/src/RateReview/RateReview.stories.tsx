import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './RateReview';
import descriptionMd from './Description.md';

export { RateReview } from './stories/RateReview-index.stories';

export default {
  title: 'Components/Icons/RateReview',
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
