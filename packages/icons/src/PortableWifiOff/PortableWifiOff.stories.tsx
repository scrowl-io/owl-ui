import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PortableWifiOff';
import descriptionMd from './Description.md';

export { PortableWifiOff } from './stories/PortableWifiOff-index.stories';

export default {
  title: 'Components/Icons/PortableWifiOff',
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
