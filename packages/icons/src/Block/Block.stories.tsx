import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Block';
import descriptionMd from './Description.md';

export { Block } from './stories/Block-index.stories';

export default {
  title: 'Components/Icons/Block',
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
