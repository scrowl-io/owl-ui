import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './MusicVideo';
import descriptionMd from './Description.md';

export { MusicVideo } from './stories/MusicVideo-index.stories';

export default {
  title: 'Components/Icons/MusicVideo',
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
