import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BurstMode';
import descriptionMd from './Description.md';

export { BurstMode } from './stories/BurstMode-index.stories';

export default {
  title: 'Components/Icons/BurstMode',
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
