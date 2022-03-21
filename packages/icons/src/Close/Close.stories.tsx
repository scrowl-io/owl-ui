import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Close';
import descriptionMd from './Description.md';

export { Close } from './stories/Close-index.stories';

export default {
  title: 'Components/Icons/Close',
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
