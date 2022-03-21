import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Games';
import descriptionMd from './Description.md';

export { Games } from './stories/Games-index.stories';

export default {
  title: 'Components/Icons/Games',
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
