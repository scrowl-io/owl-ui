import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FileDownload';
import descriptionMd from './Description.md';

export { FileDownload } from './stories/FileDownload-index.stories';

export default {
  title: 'Components/Icons/FileDownload',
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
