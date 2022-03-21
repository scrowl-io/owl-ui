import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Explore';
import descriptionMd from './Description.md';

export { Explore } from './stories/Explore-index.stories';

export default {
  title: 'Components/Icons/Explore',
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
