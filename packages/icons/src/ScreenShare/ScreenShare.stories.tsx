import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ScreenShare';
import descriptionMd from './Description.md';

export { ScreenShare } from './stories/ScreenShare-index.stories';

export default {
  title: 'Components/Icons/ScreenShare',
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
