import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DiscFull';
import descriptionMd from './Description.md';

export { DiscFull } from './stories/DiscFull-index.stories';

export default {
  title: 'Components/Icons/DiscFull',
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
