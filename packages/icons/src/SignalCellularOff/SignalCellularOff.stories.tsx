import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SignalCellularOff';
import descriptionMd from './Description.md';

export { SignalCellularOff } from './stories/SignalCellularOff-index.stories';

export default {
  title: 'Components/Icons/SignalCellularOff',
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
