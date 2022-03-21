import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Crop54';
import descriptionMd from './Description.md';

export { Crop54 } from './stories/Crop54-index.stories';

export default {
  title: 'Components/Icons/Crop54',
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
