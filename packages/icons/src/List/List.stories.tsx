import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './List';
import descriptionMd from './Description.md';

export { List } from './stories/List-index.stories';

export default {
  title: 'Components/Icons/List',
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
