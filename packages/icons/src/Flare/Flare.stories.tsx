import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Flare';
import descriptionMd from './Description.md';

export { Flare } from './stories/Flare-index.stories';

export default {
  title: 'Components/Icons/Flare',
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
