import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FontDownload';
import descriptionMd from './Description.md';

export { FontDownload } from './stories/FontDownload-index.stories';

export default {
  title: 'Components/Icons/FontDownload',
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
