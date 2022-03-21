import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Train';
import descriptionMd from './Description.md';

export { Train } from './stories/Train-index.stories';

export default {
  title: 'Components/Icons/Train',
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
