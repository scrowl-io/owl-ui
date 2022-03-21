import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ScreenLockLandscape';
import descriptionMd from './Description.md';

export { ScreenLockLandscape } from './stories/ScreenLockLandscape-index.stories';

export default {
  title: 'Components/Icons/ScreenLockLandscape',
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
