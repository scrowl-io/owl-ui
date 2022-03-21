import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './MonochromePhotos';
import descriptionMd from './Description.md';

export { MonochromePhotos } from './stories/MonochromePhotos-index.stories';

export default {
  title: 'Components/Icons/MonochromePhotos',
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
