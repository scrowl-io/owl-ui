import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './GridOff';
import descriptionMd from './Description.md';

export { GridOff } from './stories/GridOff-index.stories';

export default {
  title: 'Components/Icons/GridOff',
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
