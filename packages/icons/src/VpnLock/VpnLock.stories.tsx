import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './VpnLock';
import descriptionMd from './Description.md';

export { VpnLock } from './stories/VpnLock-index.stories';

export default {
  title: 'Components/Icons/VpnLock',
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
