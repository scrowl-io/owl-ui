import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SmokeFree';
import descriptionMd from './Description.md';

export { SmokeFree } from './stories/SmokeFree-index.stories';

export default {
  title: 'Components/Icons/SmokeFree',
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
