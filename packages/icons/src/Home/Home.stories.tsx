import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Home';
import descriptionMd from './Description.md';

export { Home } from './stories/Home-index.stories';

export default {
  title: 'Components/Icons/Home',
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
