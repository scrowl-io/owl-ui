import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './DeleteSweep';
import descriptionMd from './Description.md';

export { DeleteSweep } from './stories/DeleteSweep-index.stories';

export default {
  title: 'Components/Icons/DeleteSweep',
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
