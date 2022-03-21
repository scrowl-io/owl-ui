import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Bookmark';
import descriptionMd from './Description.md';

export { Bookmark } from './stories/Bookmark-index.stories';

export default {
  title: 'Components/Icons/Bookmark',
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
