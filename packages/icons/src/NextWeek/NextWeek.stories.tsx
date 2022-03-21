import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './NextWeek';
import descriptionMd from './Description.md';

export { NextWeek } from './stories/NextWeek-index.stories';

export default {
  title: 'Components/Icons/NextWeek',
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
