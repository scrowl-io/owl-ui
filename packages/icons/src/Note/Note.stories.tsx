import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Note';
import descriptionMd from './Description.md';

export { Note } from './stories/Note-index.stories';

export default {
  title: 'Components/Icons/Note',
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
