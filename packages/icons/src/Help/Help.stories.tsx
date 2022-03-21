import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Help';
import descriptionMd from './Description.md';

export { Help } from './stories/Help-index.stories';

export default {
  title: 'Components/Icons/Help',
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
