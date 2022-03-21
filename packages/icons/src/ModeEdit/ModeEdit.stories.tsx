import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ModeEdit';
import descriptionMd from './Description.md';

export { ModeEdit } from './stories/ModeEdit-index.stories';

export default {
  title: 'Components/Icons/ModeEdit',
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
