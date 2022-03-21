import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Speaker';
import descriptionMd from './Description.md';

export { Speaker } from './stories/Speaker-index.stories';

export default {
  title: 'Components/Icons/Speaker',
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
