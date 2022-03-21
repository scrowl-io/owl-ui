import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Store';
import descriptionMd from './Description.md';

export { Store } from './stories/Store-index.stories';

export default {
  title: 'Components/Icons/Store',
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
