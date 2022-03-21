import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Hotel';
import descriptionMd from './Description.md';

export { Hotel } from './stories/Hotel-index.stories';

export default {
  title: 'Components/Icons/Hotel',
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
