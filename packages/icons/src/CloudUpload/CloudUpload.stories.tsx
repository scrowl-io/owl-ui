import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CloudUpload';
import descriptionMd from './Description.md';

export { CloudUpload } from './stories/CloudUpload-index.stories';

export default {
  title: 'Components/Icons/CloudUpload',
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
