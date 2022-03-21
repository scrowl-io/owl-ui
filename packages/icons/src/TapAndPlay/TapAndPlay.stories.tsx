import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './TapAndPlay';
import descriptionMd from './Description.md';

export { TapAndPlay } from './stories/TapAndPlay-index.stories';

export default {
  title: 'Components/Icons/TapAndPlay',
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
