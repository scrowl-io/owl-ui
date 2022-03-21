import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Brightness5';
import descriptionMd from './Description.md';

export { Brightness5 } from './stories/Brightness5-index.stories';

export default {
  title: 'Components/Icons/Brightness5',
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
