import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Flight';
import descriptionMd from './Description.md';

export { Flight } from './stories/Flight-index.stories';

export default {
  title: 'Components/Icons/Flight',
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
