import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './VisibilityOff';
import descriptionMd from './Description.md';

export { VisibilityOff } from './stories/VisibilityOff-index.stories';

export default {
  title: 'Components/Icons/VisibilityOff',
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
