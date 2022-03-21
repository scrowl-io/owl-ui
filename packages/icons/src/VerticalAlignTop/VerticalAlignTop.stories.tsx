import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './VerticalAlignTop';
import descriptionMd from './Description.md';

export { VerticalAlignTop } from './stories/VerticalAlignTop-index.stories';

export default {
  title: 'Components/Icons/VerticalAlignTop',
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
