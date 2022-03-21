import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Public';
import descriptionMd from './Description.md';

export { Public } from './stories/Public-index.stories';

export default {
  title: 'Components/Icons/Public',
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
