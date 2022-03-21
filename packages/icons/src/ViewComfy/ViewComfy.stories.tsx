import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ViewComfy';
import descriptionMd from './Description.md';

export { ViewComfy } from './stories/ViewComfy-index.stories';

export default {
  title: 'Components/Icons/ViewComfy',
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
