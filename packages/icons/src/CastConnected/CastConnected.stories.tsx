import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CastConnected';
import descriptionMd from './Description.md';

export { CastConnected } from './stories/CastConnected-index.stories';

export default {
  title: 'Components/Icons/CastConnected',
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
