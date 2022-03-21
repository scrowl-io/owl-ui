import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DragHandle';
import descriptionMd from './Description.md';

export { DragHandle } from './stories/DragHandle-index.stories';

export default {
  title: 'Components/Icons/DragHandle',
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
