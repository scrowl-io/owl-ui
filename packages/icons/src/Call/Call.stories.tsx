import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Call';
import descriptionMd from './Description.md';

export { Call } from './stories/Call-index.stories';

export default {
  title: 'Components/Icons/Call',
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
