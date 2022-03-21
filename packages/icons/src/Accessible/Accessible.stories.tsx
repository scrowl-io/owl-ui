import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Accessible';
import descriptionMd from './Description.md';

export { Accessible } from './stories/Accessible-index.stories';

export default {
  title: 'Components/Icons/Accessible',
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
