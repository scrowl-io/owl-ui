import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Spa';
import descriptionMd from './Description.md';

export { Spa } from './stories/Spa-index.stories';

export default {
  title: 'Components/Icons/Spa',
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
