import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ScreenRotation';
import descriptionMd from './Description.md';

export { ScreenRotation } from './stories/ScreenRotation-index.stories';

export default {
  title: 'Components/Icons/ScreenRotation',
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
