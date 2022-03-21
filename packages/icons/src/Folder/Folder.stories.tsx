import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Folder';
import descriptionMd from './Description.md';

export { Folder } from './stories/Folder-index.stories';

export default {
  title: 'Components/Icons/Folder',
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
