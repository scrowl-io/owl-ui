import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PhonelinkRing';
import descriptionMd from './Description.md';

export { PhonelinkRing } from './stories/PhonelinkRing-index.stories';

export default {
  title: 'Components/Icons/PhonelinkRing',
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
