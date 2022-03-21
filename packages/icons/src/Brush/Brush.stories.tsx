import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Brush';
import descriptionMd from './Description.md';

export { Brush } from './stories/Brush-index.stories';

export default {
  title: 'Components/Icons/Brush',
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
