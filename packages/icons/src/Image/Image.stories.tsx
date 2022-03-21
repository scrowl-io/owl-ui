import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Image';
import descriptionMd from './Description.md';

export { Image } from './stories/Image-index.stories';

export default {
  title: 'Components/Icons/Image',
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
