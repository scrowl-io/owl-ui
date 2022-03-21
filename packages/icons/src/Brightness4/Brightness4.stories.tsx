import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Brightness4';
import descriptionMd from './Description.md';

export { Brightness4 } from './stories/Brightness4-index.stories';

export default {
  title: 'Components/Icons/Brightness4',
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
