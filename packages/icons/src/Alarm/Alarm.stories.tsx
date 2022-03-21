import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Alarm';
import descriptionMd from './Description.md';

export { Alarm } from './stories/Alarm-index.stories';

export default {
  title: 'Components/Icons/Alarm',
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
