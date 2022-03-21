import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FiberPin';
import descriptionMd from './Description.md';

export { FiberPin } from './stories/FiberPin-index.stories';

export default {
  title: 'Components/Icons/FiberPin',
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
