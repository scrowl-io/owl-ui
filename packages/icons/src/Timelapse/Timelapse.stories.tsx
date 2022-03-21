import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Timelapse';
import descriptionMd from './Description.md';

export { Timelapse } from './stories/Timelapse-index.stories';

export default {
  title: 'Components/Icons/Timelapse',
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
