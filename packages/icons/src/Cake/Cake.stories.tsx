import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Cake';
import descriptionMd from './Description.md';

export { Cake } from './stories/Cake-index.stories';

export default {
  title: 'Components/Icons/Cake',
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
