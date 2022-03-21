import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Forward10';
import descriptionMd from './Description.md';

export { Forward10 } from './stories/Forward10-index.stories';

export default {
  title: 'Components/Icons/Forward10',
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
