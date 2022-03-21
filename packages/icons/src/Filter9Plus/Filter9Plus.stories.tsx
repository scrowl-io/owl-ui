import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Filter9Plus';
import descriptionMd from './Description.md';

export { Filter9Plus } from './stories/Filter9Plus-index.stories';

export default {
  title: 'Components/Icons/Filter9Plus',
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
