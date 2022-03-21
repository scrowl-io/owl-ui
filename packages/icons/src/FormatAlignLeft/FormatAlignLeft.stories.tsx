import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FormatAlignLeft';
import descriptionMd from './Description.md';

export { FormatAlignLeft } from './stories/FormatAlignLeft-index.stories';

export default {
  title: 'Components/Icons/FormatAlignLeft',
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
