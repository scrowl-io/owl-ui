import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './VerticalAlignCenter';
import descriptionMd from './Description.md';

export { VerticalAlignCenter } from './stories/VerticalAlignCenter-index.stories';

export default {
  title: 'Components/Icons/VerticalAlignCenter',
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
