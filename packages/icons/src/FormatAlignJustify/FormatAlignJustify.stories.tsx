import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FormatAlignJustify';
import descriptionMd from './Description.md';

export { FormatAlignJustify } from './stories/FormatAlignJustify-index.stories';

export default {
  title: 'Components/Icons/FormatAlignJustify',
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
