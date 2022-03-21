import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Crop169';
import descriptionMd from './Description.md';

export { Crop169 } from './stories/Crop169-index.stories';

export default {
  title: 'Components/Icons/Crop169',
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
