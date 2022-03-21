import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Traffic';
import descriptionMd from './Description.md';

export { Traffic } from './stories/Traffic-index.stories';

export default {
  title: 'Components/Icons/Traffic',
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
