import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PictureInPictureAlt';
import descriptionMd from './Description.md';

export { PictureInPictureAlt } from './stories/PictureInPictureAlt-index.stories';

export default {
  title: 'Components/Icons/PictureInPictureAlt',
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
