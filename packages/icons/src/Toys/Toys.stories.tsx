import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Toys';
import descriptionMd from './Description.md';

export { Toys } from './stories/Toys-index.stories';

export default {
  title: 'Components/Icons/Toys',
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
