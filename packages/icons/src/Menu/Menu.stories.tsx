import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Menu';
import descriptionMd from './Description.md';

export { Menu } from './stories/Menu-index.stories';

export default {
  title: 'Components/Icons/Menu',
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
