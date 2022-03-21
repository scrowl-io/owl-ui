import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PhoneLocked';
import descriptionMd from './Description.md';

export { PhoneLocked } from './stories/PhoneLocked-index.stories';

export default {
  title: 'Components/Icons/PhoneLocked',
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
