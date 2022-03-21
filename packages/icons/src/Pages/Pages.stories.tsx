import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Pages';
import descriptionMd from './Description.md';

export { Pages } from './stories/Pages-index.stories';

export default {
  title: 'Components/Icons/Pages',
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
