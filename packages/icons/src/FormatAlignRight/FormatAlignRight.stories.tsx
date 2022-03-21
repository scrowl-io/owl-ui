import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FormatAlignRight';
import descriptionMd from './Description.md';

export { FormatAlignRight } from './stories/FormatAlignRight-index.stories';

export default {
  title: 'Components/Icons/FormatAlignRight',
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
