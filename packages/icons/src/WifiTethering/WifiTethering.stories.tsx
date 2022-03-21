import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './WifiTethering';
import descriptionMd from './Description.md';

export { WifiTethering } from './stories/WifiTethering-index.stories';

export default {
  title: 'Components/Icons/WifiTethering',
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
