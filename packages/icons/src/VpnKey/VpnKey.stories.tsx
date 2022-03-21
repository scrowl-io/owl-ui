import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './VpnKey';
import descriptionMd from './Description.md';

export { VpnKey } from './stories/VpnKey-index.stories';

export default {
  title: 'Components/Icons/VpnKey',
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
