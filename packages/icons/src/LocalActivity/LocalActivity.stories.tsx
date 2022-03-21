import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocalActivity';
import descriptionMd from './Description.md';

export { LocalActivity } from './stories/LocalActivity-index.stories';

export default {
  title: 'Components/Icons/LocalActivity',
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
