import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Looks6';
import descriptionMd from './Description.md';

export { Looks6 } from './stories/Looks6-index.stories';

export default {
  title: 'Components/Icons/Looks6',
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
