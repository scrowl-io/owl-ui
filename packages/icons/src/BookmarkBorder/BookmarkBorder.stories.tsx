import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BookmarkBorder';
import descriptionMd from './Description.md';

export { BookmarkBorder } from './stories/BookmarkBorder-index.stories';

export default {
  title: 'Components/Icons/BookmarkBorder',
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
