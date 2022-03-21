import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FeaturedPlayList';
import descriptionMd from './Description.md';

export { FeaturedPlayList } from './stories/FeaturedPlayList-index.stories';

export default {
  title: 'Components/Icons/FeaturedPlayList',
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
