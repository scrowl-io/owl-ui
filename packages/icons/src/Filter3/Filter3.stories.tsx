import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Filter3';
import descriptionMd from './Description.md';

export { Filter3 } from './stories/Filter3-index.stories';

export default {
  title: 'Components/Icons/Filter3',
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
