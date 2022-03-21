import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './InsertChart';
import descriptionMd from './Description.md';

export { InsertChart } from './stories/InsertChart-index.stories';

export default {
  title: 'Components/Icons/InsertChart',
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
