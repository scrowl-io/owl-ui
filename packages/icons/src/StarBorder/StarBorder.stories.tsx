import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './StarBorder';
import descriptionMd from './Description.md';

export { StarBorder } from './stories/StarBorder-index.stories';

export default {
  title: 'Components/Icons/StarBorder',
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
