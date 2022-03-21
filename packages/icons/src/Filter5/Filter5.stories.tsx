import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Filter5';
import descriptionMd from './Description.md';

export { Filter5 } from './stories/Filter5-index.stories';

export default {
  title: 'Components/Icons/Filter5',
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
