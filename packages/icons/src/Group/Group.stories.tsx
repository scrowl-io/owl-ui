import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Group';
import descriptionMd from './Description.md';

export { Group } from './stories/Group-index.stories';

export default {
  title: 'Components/Icons/Group',
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
