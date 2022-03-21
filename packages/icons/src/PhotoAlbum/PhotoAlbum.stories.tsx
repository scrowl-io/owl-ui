import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PhotoAlbum';
import descriptionMd from './Description.md';

export { PhotoAlbum } from './stories/PhotoAlbum-index.stories';

export default {
  title: 'Components/Icons/PhotoAlbum',
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
