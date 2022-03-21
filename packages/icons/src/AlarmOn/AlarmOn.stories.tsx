import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AlarmOn';
import descriptionMd from './Description.md';

export { AlarmOn } from './stories/AlarmOn-index.stories';

export default {
  title: 'Components/Icons/AlarmOn',
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
