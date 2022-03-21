import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PhotoSizeSelectLarge';
import descriptionMd from './Description.md';

export { PhotoSizeSelectLarge } from './stories/PhotoSizeSelectLarge-index.stories';

export default {
  title: 'Components/Icons/PhotoSizeSelectLarge',
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
