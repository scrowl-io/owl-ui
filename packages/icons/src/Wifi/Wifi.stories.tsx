import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Wifi';
import descriptionMd from './Description.md';

export { Wifi } from './stories/Wifi-index.stories';

export default {
  title: 'Components/Icons/Wifi',
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
