import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FormatClear';
import descriptionMd from './Description.md';

export { FormatClear } from './stories/FormatClear-index.stories';

export default {
  title: 'Components/Icons/FormatClear',
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
