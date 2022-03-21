import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CameraAlt';
import descriptionMd from './Description.md';

export { CameraAlt } from './stories/CameraAlt-index.stories';

export default {
  title: 'Components/Icons/CameraAlt',
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
