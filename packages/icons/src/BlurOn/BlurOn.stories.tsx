import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BlurOn';
import descriptionMd from './Description.md';

export { BlurOn } from './stories/BlurOn-index.stories';

export default {
  title: 'Components/Icons/BlurOn',
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
