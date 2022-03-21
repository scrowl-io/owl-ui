import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Filter9';
import descriptionMd from './Description.md';

export { Filter9 } from './stories/Filter9-index.stories';

export default {
  title: 'Components/Icons/Filter9',
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
