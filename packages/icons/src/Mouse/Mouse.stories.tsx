import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Mouse';
import descriptionMd from './Description.md';

export { Mouse } from './stories/Mouse-index.stories';

export default {
  title: 'Components/Icons/Mouse',
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
