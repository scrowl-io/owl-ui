import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './EventNote';
import descriptionMd from './Description.md';

export { EventNote } from './stories/EventNote-index.stories';

export default {
  title: 'Components/Icons/EventNote',
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
