import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './KeyboardArrowLeft';
import descriptionMd from './Description.md';

export { KeyboardArrowLeft } from './stories/KeyboardArrowLeft-index.stories';

export default {
  title: 'Components/Icons/KeyboardArrowLeft',
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
