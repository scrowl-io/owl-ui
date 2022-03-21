import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Headset';
import descriptionMd from './Description.md';

export { Headset } from './stories/Headset-index.stories';

export default {
  title: 'Components/Icons/Headset',
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
