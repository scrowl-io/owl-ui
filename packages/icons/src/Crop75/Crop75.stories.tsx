import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Crop75';
import descriptionMd from './Description.md';

export { Crop75 } from './stories/Crop75-index.stories';

export default {
  title: 'Components/Icons/Crop75',
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
