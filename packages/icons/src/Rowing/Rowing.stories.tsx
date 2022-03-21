import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Rowing';
import descriptionMd from './Description.md';

export { Rowing } from './stories/Rowing-index.stories';

export default {
  title: 'Components/Icons/Rowing',
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
