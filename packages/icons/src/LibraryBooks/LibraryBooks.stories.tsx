import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LibraryBooks';
import descriptionMd from './Description.md';

export { LibraryBooks } from './stories/LibraryBooks-index.stories';

export default {
  title: 'Components/Icons/LibraryBooks',
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
