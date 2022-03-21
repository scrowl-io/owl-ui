import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './NetworkLocked';
import descriptionMd from './Description.md';

export { NetworkLocked } from './stories/NetworkLocked-index.stories';

export default {
  title: 'Components/Icons/NetworkLocked',
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
