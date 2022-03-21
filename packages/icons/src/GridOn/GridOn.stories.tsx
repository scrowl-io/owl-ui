import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './GridOn';
import descriptionMd from './Description.md';

export { GridOn } from './stories/GridOn-index.stories';

export default {
  title: 'Components/Icons/GridOn',
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
