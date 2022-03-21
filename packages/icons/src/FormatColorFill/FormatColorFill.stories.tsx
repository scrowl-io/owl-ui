import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FormatColorFill';
import descriptionMd from './Description.md';

export { FormatColorFill } from './stories/FormatColorFill-index.stories';

export default {
  title: 'Components/Icons/FormatColorFill',
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
