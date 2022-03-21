import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Receipt';
import descriptionMd from './Description.md';

export { Receipt } from './stories/Receipt-index.stories';

export default {
  title: 'Components/Icons/Receipt',
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
