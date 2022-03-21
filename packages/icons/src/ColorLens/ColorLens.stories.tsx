import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ColorLens';
import descriptionMd from './Description.md';

export { ColorLens } from './stories/ColorLens-index.stories';

export default {
  title: 'Components/Icons/ColorLens',
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
