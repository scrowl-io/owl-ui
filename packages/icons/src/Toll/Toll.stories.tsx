import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Toll';
import descriptionMd from './Description.md';

export { Toll } from './stories/Toll-index.stories';

export default {
  title: 'Components/Icons/Toll',
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
