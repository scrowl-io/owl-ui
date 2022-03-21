import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Forward30';
import descriptionMd from './Description.md';

export { Forward30 } from './stories/Forward30-index.stories';

export default {
  title: 'Components/Icons/Forward30',
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
