import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ViewQuilt';
import descriptionMd from './Description.md';

export { ViewQuilt } from './stories/ViewQuilt-index.stories';

export default {
  title: 'Components/Icons/ViewQuilt',
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
