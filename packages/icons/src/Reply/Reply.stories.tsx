import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Reply';
import descriptionMd from './Description.md';

export { Reply } from './stories/Reply-index.stories';

export default {
  title: 'Components/Icons/Reply',
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
