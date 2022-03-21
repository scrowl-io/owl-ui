import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FolderShared';
import descriptionMd from './Description.md';

export { FolderShared } from './stories/FolderShared-index.stories';

export default {
  title: 'Components/Icons/FolderShared',
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
