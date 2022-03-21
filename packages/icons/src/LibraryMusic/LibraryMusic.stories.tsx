import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LibraryMusic';
import descriptionMd from './Description.md';

export { LibraryMusic } from './stories/LibraryMusic-index.stories';

export default {
  title: 'Components/Icons/LibraryMusic',
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
