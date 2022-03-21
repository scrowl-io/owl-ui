import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LineStyle';
import descriptionMd from './Description.md';

export { LineStyle } from './stories/LineStyle-index.stories';

export default {
  title: 'Components/Icons/LineStyle',
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
