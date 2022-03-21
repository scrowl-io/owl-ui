import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './History';
import descriptionMd from './Description.md';

export { History } from './stories/History-index.stories';

export default {
  title: 'Components/Icons/History',
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
