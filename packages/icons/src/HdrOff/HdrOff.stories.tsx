import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './HdrOff';
import descriptionMd from './Description.md';

export { HdrOff } from './stories/HdrOff-index.stories';

export default {
  title: 'Components/Icons/HdrOff',
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
