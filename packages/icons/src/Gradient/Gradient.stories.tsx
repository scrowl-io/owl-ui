import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Gradient';
import descriptionMd from './Description.md';

export { Gradient } from './stories/Gradient-index.stories';

export default {
  title: 'Components/Icons/Gradient',
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
