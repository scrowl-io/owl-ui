import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Crop32';
import descriptionMd from './Description.md';

export { Crop32 } from './stories/Crop32-index.stories';

export default {
  title: 'Components/Icons/Crop32',
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
