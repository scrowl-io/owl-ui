import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './VolumeOff';
import descriptionMd from './Description.md';

export { VolumeOff } from './stories/VolumeOff-index.stories';

export default {
  title: 'Components/Icons/VolumeOff',
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
