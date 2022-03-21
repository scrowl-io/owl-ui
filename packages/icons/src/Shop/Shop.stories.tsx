import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Shop';
import descriptionMd from './Description.md';

export { Shop } from './stories/Shop-index.stories';

export default {
  title: 'Components/Icons/Shop',
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
