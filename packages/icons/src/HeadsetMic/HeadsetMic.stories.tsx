import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './HeadsetMic';
import descriptionMd from './Description.md';

export { HeadsetMic } from './stories/HeadsetMic-index.stories';

export default {
  title: 'Components/Icons/HeadsetMic',
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
