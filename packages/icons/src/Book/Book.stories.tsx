import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Book';
import descriptionMd from './Description.md';

export { Book } from './stories/Book-index.stories';

export default {
  title: 'Components/Icons/Book',
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
