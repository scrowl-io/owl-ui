import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AddToPhotos';
import descriptionMd from './Description.md';

export { AddToPhotos } from './stories/AddToPhotos-index.stories';

export default {
  title: 'Components/Icons/AddToPhotos',
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
