import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LiveTv';
import descriptionMd from './Description.md';

export { LiveTv } from './stories/LiveTv-index.stories';

export default {
  title: 'Components/Icons/LiveTv',
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
