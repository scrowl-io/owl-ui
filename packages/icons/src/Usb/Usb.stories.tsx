import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Usb';
import descriptionMd from './Description.md';

export { Usb } from './stories/Usb-index.stories';

export default {
  title: 'Components/Icons/Usb',
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
