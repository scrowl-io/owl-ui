import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AlarmOff';
import descriptionMd from './Description.md';

export { AlarmOff } from './stories/AlarmOff-index.stories';

export default {
  title: 'Components/Icons/AlarmOff',
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
