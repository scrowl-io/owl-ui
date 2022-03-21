import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LiveHelp';
import descriptionMd from './Description.md';

export { LiveHelp } from './stories/LiveHelp-index.stories';

export default {
  title: 'Components/Icons/LiveHelp',
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
