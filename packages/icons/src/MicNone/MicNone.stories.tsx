import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './MicNone';
import descriptionMd from './Description.md';

export { MicNone } from './stories/MicNone-index.stories';

export default {
  title: 'Components/Icons/MicNone',
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
