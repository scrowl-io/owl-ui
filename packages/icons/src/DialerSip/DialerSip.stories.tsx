import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DialerSip';
import descriptionMd from './Description.md';

export { DialerSip } from './stories/DialerSip-index.stories';

export default {
  title: 'Components/Icons/DialerSip',
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
