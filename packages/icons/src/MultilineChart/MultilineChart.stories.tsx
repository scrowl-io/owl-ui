import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './MultilineChart';
import descriptionMd from './Description.md';

export { MultilineChart } from './stories/MultilineChart-index.stories';

export default {
  title: 'Components/Icons/MultilineChart',
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
