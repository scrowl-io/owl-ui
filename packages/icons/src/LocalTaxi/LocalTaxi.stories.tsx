import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocalTaxi';
import descriptionMd from './Description.md';

export { LocalTaxi } from './stories/LocalTaxi-index.stories';

export default {
  title: 'Components/Icons/LocalTaxi',
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
