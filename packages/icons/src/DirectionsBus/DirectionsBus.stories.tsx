import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DirectionsBus';
import descriptionMd from './Description.md';

export { DirectionsBus } from './stories/DirectionsBus-index.stories';

export default {
  title: 'Components/Icons/DirectionsBus',
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
