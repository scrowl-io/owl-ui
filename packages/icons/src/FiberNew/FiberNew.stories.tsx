import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FiberNew';
import descriptionMd from './Description.md';

export { FiberNew } from './stories/FiberNew-index.stories';

export default {
  title: 'Components/Icons/FiberNew',
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
