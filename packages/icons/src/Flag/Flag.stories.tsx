import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Flag';
import descriptionMd from './Description.md';

export { Flag } from './stories/Flag-index.stories';

export default {
  title: 'Components/Icons/Flag',
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
