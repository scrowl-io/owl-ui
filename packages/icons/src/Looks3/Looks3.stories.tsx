import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Looks3';
import descriptionMd from './Description.md';

export { Looks3 } from './stories/Looks3-index.stories';

export default {
  title: 'Components/Icons/Looks3',
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
