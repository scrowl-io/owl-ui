import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PieChartOutlined';
import descriptionMd from './Description.md';

export { PieChartOutlined } from './stories/PieChartOutlined-index.stories';

export default {
  title: 'Components/Icons/PieChartOutlined',
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
