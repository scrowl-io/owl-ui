import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PlusOne';
import descriptionMd from './Description.md';

export { PlusOne } from './stories/PlusOne-index.stories';

export default {
  title: 'Components/Icons/PlusOne',
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
