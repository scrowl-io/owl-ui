import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CameraRear';
import descriptionMd from './Description.md';

export { CameraRear } from './stories/CameraRear-index.stories';

export default {
  title: 'Components/Icons/CameraRear',
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
