import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AddCircleOutline';
import descriptionMd from './Description.md';

export { AddCircleOutline } from './stories/AddCircleOutline-index.stories';

export default {
  title: 'Components/Icons/AddCircleOutline',
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
