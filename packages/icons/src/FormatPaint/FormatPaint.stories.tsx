import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FormatPaint';
import descriptionMd from './Description.md';

export { FormatPaint } from './stories/FormatPaint-index.stories';

export default {
  title: 'Components/Icons/FormatPaint',
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
