import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PhonePaused';
import descriptionMd from './Description.md';

export { PhonePaused } from './stories/PhonePaused-index.stories';

export default {
  title: 'Components/Icons/PhonePaused',
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
