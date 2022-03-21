import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BorderLeft';
import descriptionMd from './Description.md';

export { BorderLeft } from './stories/BorderLeft-index.stories';

export default {
  title: 'Components/Icons/BorderLeft',
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
