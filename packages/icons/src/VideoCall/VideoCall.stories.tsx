import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './VideoCall';
import descriptionMd from './Description.md';

export { VideoCall } from './stories/VideoCall-index.stories';

export default {
  title: 'Components/Icons/VideoCall',
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
