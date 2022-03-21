import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Dehaze';
import descriptionMd from './Description.md';

export { Dehaze } from './stories/Dehaze-index.stories';

export default {
  title: 'Components/Icons/Dehaze',
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
