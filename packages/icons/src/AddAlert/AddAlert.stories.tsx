import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AddAlert';
import descriptionMd from './Description.md';

export { AddAlert } from './stories/AddAlert-index.stories';

export default {
  title: 'Components/Icons/AddAlert',
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
