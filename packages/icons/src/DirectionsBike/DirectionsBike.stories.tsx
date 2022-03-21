import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DirectionsBike';
import descriptionMd from './Description.md';

export { DirectionsBike } from './stories/DirectionsBike-index.stories';

export default {
  title: 'Components/Icons/DirectionsBike',
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
