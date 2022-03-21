import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AddBox';
import descriptionMd from './Description.md';

export { AddBox } from './stories/AddBox-index.stories';

export default {
  title: 'Components/Icons/AddBox',
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
