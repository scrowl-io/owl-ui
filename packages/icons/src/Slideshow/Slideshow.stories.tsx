import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Slideshow';
import descriptionMd from './Description.md';

export { Slideshow } from './stories/Slideshow-index.stories';

export default {
  title: 'Components/Icons/Slideshow',
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
