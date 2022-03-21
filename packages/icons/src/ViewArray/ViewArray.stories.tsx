import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ViewArray';
import descriptionMd from './Description.md';

export { ViewArray } from './stories/ViewArray-index.stories';

export default {
  title: 'Components/Icons/ViewArray',
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
