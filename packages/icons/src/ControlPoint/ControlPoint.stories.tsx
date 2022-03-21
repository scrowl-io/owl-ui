import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ControlPoint';
import descriptionMd from './Description.md';

export { ControlPoint } from './stories/ControlPoint-index.stories';

export default {
  title: 'Components/Icons/ControlPoint',
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
