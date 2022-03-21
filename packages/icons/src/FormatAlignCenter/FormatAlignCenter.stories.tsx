import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FormatAlignCenter';
import descriptionMd from './Description.md';

export { FormatAlignCenter } from './stories/FormatAlignCenter-index.stories';

export default {
  title: 'Components/Icons/FormatAlignCenter',
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
