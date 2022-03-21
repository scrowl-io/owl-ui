import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AddAlarm';
import descriptionMd from './Description.md';

export { AddAlarm } from './stories/AddAlarm-index.stories';

export default {
  title: 'Components/Icons/AddAlarm',
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
