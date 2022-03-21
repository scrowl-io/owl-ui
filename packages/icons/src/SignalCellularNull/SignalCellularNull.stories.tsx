import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SignalCellularNull';
import descriptionMd from './Description.md';

export { SignalCellularNull } from './stories/SignalCellularNull-index.stories';

export default {
  title: 'Components/Icons/SignalCellularNull',
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
