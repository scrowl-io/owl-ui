import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Error';
import descriptionMd from './Description.md';

export { Error } from './stories/Error-index.stories';

export default {
  title: 'Components/Icons/Error',
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
