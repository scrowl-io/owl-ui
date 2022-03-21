import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './VideoLabel';
import descriptionMd from './Description.md';

export { VideoLabel } from './stories/VideoLabel-index.stories';

export default {
  title: 'Components/Icons/VideoLabel',
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
