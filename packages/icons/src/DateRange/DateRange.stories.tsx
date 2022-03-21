import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DateRange';
import descriptionMd from './Description.md';

export { DateRange } from './stories/DateRange-index.stories';

export default {
  title: 'Components/Icons/DateRange',
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
