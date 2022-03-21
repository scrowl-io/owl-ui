import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Cancel';
import descriptionMd from './Description.md';

export { Cancel } from './stories/Cancel-index.stories';

export default {
  title: 'Components/Icons/Cancel',
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
