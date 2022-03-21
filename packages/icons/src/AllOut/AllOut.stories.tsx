import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AllOut';
import descriptionMd from './Description.md';

export { AllOut } from './stories/AllOut-index.stories';

export default {
  title: 'Components/Icons/AllOut',
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
