import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Brightness3';
import descriptionMd from './Description.md';

export { Brightness3 } from './stories/Brightness3-index.stories';

export default {
  title: 'Components/Icons/Brightness3',
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
