import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FolderSpecial';
import descriptionMd from './Description.md';

export { FolderSpecial } from './stories/FolderSpecial-index.stories';

export default {
  title: 'Components/Icons/FolderSpecial',
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
