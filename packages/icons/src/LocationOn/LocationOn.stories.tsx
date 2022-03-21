import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocationOn';
import descriptionMd from './Description.md';

export { LocationOn } from './stories/LocationOn-index.stories';

export default {
  title: 'Components/Icons/LocationOn',
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
