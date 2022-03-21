import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DoNotDisturbOn';
import descriptionMd from './Description.md';

export { DoNotDisturbOn } from './stories/DoNotDisturbOn-index.stories';

export default {
  title: 'Components/Icons/DoNotDisturbOn',
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
