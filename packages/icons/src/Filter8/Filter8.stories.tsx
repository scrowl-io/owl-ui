import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Filter8';
import descriptionMd from './Description.md';

export { Filter8 } from './stories/Filter8-index.stories';

export default {
  title: 'Components/Icons/Filter8',
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
