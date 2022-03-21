import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FiberManualRecord';
import descriptionMd from './Description.md';

export { FiberManualRecord } from './stories/FiberManualRecord-index.stories';

export default {
  title: 'Components/Icons/FiberManualRecord',
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
