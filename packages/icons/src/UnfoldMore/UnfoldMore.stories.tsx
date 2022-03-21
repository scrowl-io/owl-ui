import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './UnfoldMore';
import descriptionMd from './Description.md';

export { UnfoldMore } from './stories/UnfoldMore-index.stories';

export default {
  title: 'Components/Icons/UnfoldMore',
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
