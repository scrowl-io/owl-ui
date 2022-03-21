import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AttachFile';
import descriptionMd from './Description.md';

export { AttachFile } from './stories/AttachFile-index.stories';

export default {
  title: 'Components/Icons/AttachFile',
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
