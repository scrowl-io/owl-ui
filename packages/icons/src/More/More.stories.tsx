import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './More';
import descriptionMd from './Description.md';

export { More } from './stories/More-index.stories';

export default {
  title: 'Components/Icons/More',
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
