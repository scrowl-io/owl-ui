import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BorderClear';
import descriptionMd from './Description.md';

export { BorderClear } from './stories/BorderClear-index.stories';

export default {
  title: 'Components/Icons/BorderClear',
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
