import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SkipNext';
import descriptionMd from './Description.md';

export { SkipNext } from './stories/SkipNext-index.stories';

export default {
  title: 'Components/Icons/SkipNext',
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
