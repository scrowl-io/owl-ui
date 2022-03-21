import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Collections';
import descriptionMd from './Description.md';

export { Collections } from './stories/Collections-index.stories';

export default {
  title: 'Components/Icons/Collections',
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
