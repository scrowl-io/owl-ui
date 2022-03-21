import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Timeline';
import descriptionMd from './Description.md';

export { Timeline } from './stories/Timeline-index.stories';

export default {
  title: 'Components/Icons/Timeline',
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
