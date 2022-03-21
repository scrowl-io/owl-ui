import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Tablet';
import descriptionMd from './Description.md';

export { Tablet } from './stories/Tablet-index.stories';

export default {
  title: 'Components/Icons/Tablet',
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
