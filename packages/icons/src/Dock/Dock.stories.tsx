import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Dock';
import descriptionMd from './Description.md';

export { Dock } from './stories/Dock-index.stories';

export default {
  title: 'Components/Icons/Dock',
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
