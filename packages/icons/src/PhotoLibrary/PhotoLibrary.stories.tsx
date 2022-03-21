import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PhotoLibrary';
import descriptionMd from './Description.md';

export { PhotoLibrary } from './stories/PhotoLibrary-index.stories';

export default {
  title: 'Components/Icons/PhotoLibrary',
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
