import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Motorcycle';
import descriptionMd from './Description.md';

export { Motorcycle } from './stories/Motorcycle-index.stories';

export default {
  title: 'Components/Icons/Motorcycle',
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
