import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './TransferWithinAStation';
import descriptionMd from './Description.md';

export { TransferWithinAStation } from './stories/TransferWithinAStation-index.stories';

export default {
  title: 'Components/Icons/TransferWithinAStation',
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
