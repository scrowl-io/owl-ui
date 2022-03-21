import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './VolumeUp';
import descriptionMd from './Description.md';

export { VolumeUp } from './stories/VolumeUp-index.stories';

export default {
  title: 'Components/Icons/VolumeUp',
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
