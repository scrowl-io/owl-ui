import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './HourglassEmpty';
import descriptionMd from './Description.md';

export { HourglassEmpty } from './stories/HourglassEmpty-index.stories';

export default {
  title: 'Components/Icons/HourglassEmpty',
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
