import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Sync';
import descriptionMd from './Description.md';

export { Sync } from './stories/Sync-index.stories';

export default {
  title: 'Components/Icons/Sync',
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
