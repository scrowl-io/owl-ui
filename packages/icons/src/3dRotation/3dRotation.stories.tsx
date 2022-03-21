import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './3dRotation';
import descriptionMd from './Description.md';

export { 3dRotation } from './stories/3dRotation-index.stories';

export default {
  title: 'Components/Icons/3dRotation',
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
