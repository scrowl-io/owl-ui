import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './MicOff';
import descriptionMd from './Description.md';

export { MicOff } from './stories/MicOff-index.stories';

export default {
  title: 'Components/Icons/MicOff',
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
