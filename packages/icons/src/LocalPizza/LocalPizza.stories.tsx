import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocalPizza';
import descriptionMd from './Description.md';

export { LocalPizza } from './stories/LocalPizza-index.stories';

export default {
  title: 'Components/Icons/LocalPizza',
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
