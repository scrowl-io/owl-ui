import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './TabletMac';
import descriptionMd from './Description.md';

export { TabletMac } from './stories/TabletMac-index.stories';

export default {
  title: 'Components/Icons/TabletMac',
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
