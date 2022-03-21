import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CallMissed';
import descriptionMd from './Description.md';

export { CallMissed } from './stories/CallMissed-index.stories';

export default {
  title: 'Components/Icons/CallMissed',
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
