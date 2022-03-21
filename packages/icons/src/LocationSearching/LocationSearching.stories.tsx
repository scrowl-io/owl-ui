import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocationSearching';
import descriptionMd from './Description.md';

export { LocationSearching } from './stories/LocationSearching-index.stories';

export default {
  title: 'Components/Icons/LocationSearching',
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
