import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FormatShapes';
import descriptionMd from './Description.md';

export { FormatShapes } from './stories/FormatShapes-index.stories';

export default {
  title: 'Components/Icons/FormatShapes',
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
