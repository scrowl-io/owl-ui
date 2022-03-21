import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './StrikethroughS';
import descriptionMd from './Description.md';

export { StrikethroughS } from './stories/StrikethroughS-index.stories';

export default {
  title: 'Components/Icons/StrikethroughS',
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
