import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FullscreenExit';
import descriptionMd from './Description.md';

export { FullscreenExit } from './stories/FullscreenExit-index.stories';

export default {
  title: 'Components/Icons/FullscreenExit',
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
