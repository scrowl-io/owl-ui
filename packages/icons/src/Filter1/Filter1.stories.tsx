import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Filter1';
import descriptionMd from './Description.md';

export { Filter1 } from './stories/Filter1-index.stories';

export default {
  title: 'Components/Icons/Filter1',
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
