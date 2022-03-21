import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ScreenLockRotation';
import descriptionMd from './Description.md';

export { ScreenLockRotation } from './stories/ScreenLockRotation-index.stories';

export default {
  title: 'Components/Icons/ScreenLockRotation',
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
