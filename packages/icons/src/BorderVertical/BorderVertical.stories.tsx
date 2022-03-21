import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BorderVertical';
import descriptionMd from './Description.md';

export { BorderVertical } from './stories/BorderVertical-index.stories';

export default {
  title: 'Components/Icons/BorderVertical',
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
