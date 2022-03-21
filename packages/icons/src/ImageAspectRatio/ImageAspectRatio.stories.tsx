import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ImageAspectRatio';
import descriptionMd from './Description.md';

export { ImageAspectRatio } from './stories/ImageAspectRatio-index.stories';

export default {
  title: 'Components/Icons/ImageAspectRatio',
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
