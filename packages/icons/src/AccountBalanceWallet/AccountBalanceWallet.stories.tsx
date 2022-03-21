import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AccountBalanceWallet';
import descriptionMd from './Description.md';

export { AccountBalanceWallet } from './stories/AccountBalanceWallet-index.stories';

export default {
  title: 'Components/Icons/AccountBalanceWallet',
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
