import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Mic';
import descriptionMd from './Description.md';

export { Mic } from './stories/Mic-index.stories';

export default {
  title: 'Components/Icons/Mic',
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
