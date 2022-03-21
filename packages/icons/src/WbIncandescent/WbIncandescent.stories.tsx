import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './WbIncandescent';
import descriptionMd from './Description.md';

export { WbIncandescent } from './stories/WbIncandescent-index.stories';

export default {
  title: 'Components/Icons/WbIncandescent',
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
