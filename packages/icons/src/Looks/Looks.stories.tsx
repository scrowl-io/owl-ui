import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Looks';
import descriptionMd from './Description.md';

export { Looks } from './stories/Looks-index.stories';

export default {
  title: 'Components/Icons/Looks',
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
