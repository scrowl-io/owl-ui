import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PhonelinkOff';
import descriptionMd from './Description.md';

export { PhonelinkOff } from './stories/PhonelinkOff-index.stories';

export default {
  title: 'Components/Icons/PhonelinkOff',
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
