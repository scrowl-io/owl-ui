import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ChevronRight';
import descriptionMd from './Description.md';

export { ChevronRight } from './stories/ChevronRight-index.stories';

export default {
  title: 'Components/Icons/ChevronRight',
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
