import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Streetview';
import descriptionMd from './Description.md';

export { Streetview } from './stories/Streetview-index.stories';

export default {
  title: 'Components/Icons/Streetview',
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
