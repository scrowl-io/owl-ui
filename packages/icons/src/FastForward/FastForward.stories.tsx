import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FastForward';
import descriptionMd from './Description.md';

export { FastForward } from './stories/FastForward-index.stories';

export default {
  title: 'Components/Icons/FastForward',
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
