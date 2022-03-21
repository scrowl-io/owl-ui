import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Details';
import descriptionMd from './Description.md';

export { Details } from './stories/Details-index.stories';

export default {
  title: 'Components/Icons/Details',
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
