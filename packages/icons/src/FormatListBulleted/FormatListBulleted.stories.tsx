import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FormatListBulleted';
import descriptionMd from './Description.md';

export { FormatListBulleted } from './stories/FormatListBulleted-index.stories';

export default {
  title: 'Components/Icons/FormatListBulleted',
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
