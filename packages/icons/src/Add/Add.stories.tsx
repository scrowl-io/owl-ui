import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Add';
import descriptionMd from './Description.md';

export { Add } from './stories/Add-index.stories';

export default {
  title: 'Components/Icons/Add',
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
