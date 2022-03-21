import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './WifiLock';
import descriptionMd from './Description.md';

export { WifiLock } from './stories/WifiLock-index.stories';

export default {
  title: 'Components/Icons/WifiLock',
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
