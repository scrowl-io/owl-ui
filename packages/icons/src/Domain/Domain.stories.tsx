import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Domain';
import descriptionMd from './Description.md';

export { Domain } from './stories/Domain-index.stories';

export default {
  title: 'Components/Icons/Domain',
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
