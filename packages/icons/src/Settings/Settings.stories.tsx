import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Settings';
import descriptionMd from './Description.md';

export { Settings } from './stories/Settings-index.stories';

export default {
  title: 'Components/Icons/Settings',
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
