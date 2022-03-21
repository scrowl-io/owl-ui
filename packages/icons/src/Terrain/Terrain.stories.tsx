import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Terrain';
import descriptionMd from './Description.md';

export { Terrain } from './stories/Terrain-index.stories';

export default {
  title: 'Components/Icons/Terrain',
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
