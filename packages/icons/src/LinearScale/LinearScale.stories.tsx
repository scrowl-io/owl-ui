import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LinearScale';
import descriptionMd from './Description.md';

export { LinearScale } from './stories/LinearScale-index.stories';

export default {
  title: 'Components/Icons/LinearScale',
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
