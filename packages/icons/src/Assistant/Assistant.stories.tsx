import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Assistant';
import descriptionMd from './Description.md';

export { Assistant } from './stories/Assistant-index.stories';

export default {
  title: 'Components/Icons/Assistant',
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
