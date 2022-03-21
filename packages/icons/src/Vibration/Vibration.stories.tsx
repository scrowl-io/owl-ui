import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Vibration';
import descriptionMd from './Description.md';

export { Vibration } from './stories/Vibration-index.stories';

export default {
  title: 'Components/Icons/Vibration',
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
