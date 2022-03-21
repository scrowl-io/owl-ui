import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocalGasStation';
import descriptionMd from './Description.md';

export { LocalGasStation } from './stories/LocalGasStation-index.stories';

export default {
  title: 'Components/Icons/LocalGasStation',
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
