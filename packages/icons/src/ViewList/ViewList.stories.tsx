import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ViewList';
import descriptionMd from './Description.md';

export { ViewList } from './stories/ViewList-index.stories';

export default {
  title: 'Components/Icons/ViewList',
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
