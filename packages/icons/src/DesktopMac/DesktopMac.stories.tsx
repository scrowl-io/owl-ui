import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DesktopMac';
import descriptionMd from './Description.md';

export { DesktopMac } from './stories/DesktopMac-index.stories';

export default {
  title: 'Components/Icons/DesktopMac',
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
