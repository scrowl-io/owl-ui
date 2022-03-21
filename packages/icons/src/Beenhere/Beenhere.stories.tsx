import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Beenhere';
import descriptionMd from './Description.md';

export { Beenhere } from './stories/Beenhere-index.stories';

export default {
  title: 'Components/Icons/Beenhere',
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
