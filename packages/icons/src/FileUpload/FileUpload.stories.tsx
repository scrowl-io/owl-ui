import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FileUpload';
import descriptionMd from './Description.md';

export { FileUpload } from './stories/FileUpload-index.stories';

export default {
  title: 'Components/Icons/FileUpload',
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
