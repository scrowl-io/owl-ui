import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './HourglassFull';
import descriptionMd from './Description.md';

export { HourglassFull } from './stories/HourglassFull-index.stories';

export default {
  title: 'Components/Icons/HourglassFull',
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
