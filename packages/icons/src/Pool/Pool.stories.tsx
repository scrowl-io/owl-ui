import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Pool';
import descriptionMd from './Description.md';

export { Pool } from './stories/Pool-index.stories';

export default {
  title: 'Components/Icons/Pool',
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
