import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PhotoSizeSelectSmall';
import descriptionMd from './Description.md';

export { PhotoSizeSelectSmall } from './stories/PhotoSizeSelectSmall-index.stories';

export default {
  title: 'Components/Icons/PhotoSizeSelectSmall',
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
