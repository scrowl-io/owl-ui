import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ImportantDevices';
import descriptionMd from './Description.md';

export { ImportantDevices } from './stories/ImportantDevices-index.stories';

export default {
  title: 'Components/Icons/ImportantDevices',
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
