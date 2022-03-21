import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocalShipping';
import descriptionMd from './Description.md';

export { LocalShipping } from './stories/LocalShipping-index.stories';

export default {
  title: 'Components/Icons/LocalShipping',
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
