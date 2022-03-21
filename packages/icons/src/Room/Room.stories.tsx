import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Room';
import descriptionMd from './Description.md';

export { Room } from './stories/Room-index.stories';

export default {
  title: 'Components/Icons/Room',
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
