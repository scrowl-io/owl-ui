import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Today';
import descriptionMd from './Description.md';

export { Today } from './stories/Today-index.stories';

export default {
  title: 'Components/Icons/Today',
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
