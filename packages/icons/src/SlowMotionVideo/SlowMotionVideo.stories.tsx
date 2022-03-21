import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SlowMotionVideo';
import descriptionMd from './Description.md';

export { SlowMotionVideo } from './stories/SlowMotionVideo-index.stories';

export default {
  title: 'Components/Icons/SlowMotionVideo',
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
