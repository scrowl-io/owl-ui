import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Album';
import descriptionMd from './Description.md';

export { Album } from './stories/Album-index.stories';

export default {
  title: 'Components/Icons/Album',
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
