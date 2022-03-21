import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Check';
import descriptionMd from './Description.md';

export { Check } from './stories/Check-index.stories';

export default {
  title: 'Components/Icons/Check',
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
