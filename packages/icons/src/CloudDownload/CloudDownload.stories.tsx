import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CloudDownload';
import descriptionMd from './Description.md';

export { CloudDownload } from './stories/CloudDownload-index.stories';

export default {
  title: 'Components/Icons/CloudDownload',
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
