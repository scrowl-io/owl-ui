import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SignalCellular4Bar';
import descriptionMd from './Description.md';

export { SignalCellular4Bar } from './stories/SignalCellular4Bar-index.stories';

export default {
  title: 'Components/Icons/SignalCellular4Bar',
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
