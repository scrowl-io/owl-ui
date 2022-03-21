import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CameraFront';
import descriptionMd from './Description.md';

export { CameraFront } from './stories/CameraFront-index.stories';

export default {
  title: 'Components/Icons/CameraFront',
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
