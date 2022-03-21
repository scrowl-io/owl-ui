import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocalParking';
import descriptionMd from './Description.md';

export { LocalParking } from './stories/LocalParking-index.stories';

export default {
  title: 'Components/Icons/LocalParking',
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
