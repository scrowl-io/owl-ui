import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CallReceived';
import descriptionMd from './Description.md';

export { CallReceived } from './stories/CallReceived-index.stories';

export default {
  title: 'Components/Icons/CallReceived',
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
