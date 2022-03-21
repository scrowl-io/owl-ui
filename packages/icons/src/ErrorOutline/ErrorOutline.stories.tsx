import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ErrorOutline';
import descriptionMd from './Description.md';

export { ErrorOutline } from './stories/ErrorOutline-index.stories';

export default {
  title: 'Components/Icons/ErrorOutline',
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
