import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocalLibrary';
import descriptionMd from './Description.md';

export { LocalLibrary } from './stories/LocalLibrary-index.stories';

export default {
  title: 'Components/Icons/LocalLibrary',
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
