import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SpaceBar';
import descriptionMd from './Description.md';

export { SpaceBar } from './stories/SpaceBar-index.stories';

export default {
  title: 'Components/Icons/SpaceBar',
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
