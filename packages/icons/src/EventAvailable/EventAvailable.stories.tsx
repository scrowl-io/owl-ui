import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './EventAvailable';
import descriptionMd from './Description.md';

export { EventAvailable } from './stories/EventAvailable-index.stories';

export default {
  title: 'Components/Icons/EventAvailable',
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
