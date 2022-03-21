import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './NetworkWifi';
import descriptionMd from './Description.md';

export { NetworkWifi } from './stories/NetworkWifi-index.stories';

export default {
  title: 'Components/Icons/NetworkWifi',
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
