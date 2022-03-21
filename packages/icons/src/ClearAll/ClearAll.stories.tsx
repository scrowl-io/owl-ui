import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ClearAll';
import descriptionMd from './Description.md';

export { ClearAll } from './stories/ClearAll-index.stories';

export default {
  title: 'Components/Icons/ClearAll',
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
