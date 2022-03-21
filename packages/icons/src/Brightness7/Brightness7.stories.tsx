import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Brightness7';
import descriptionMd from './Description.md';

export { Brightness7 } from './stories/Brightness7-index.stories';

export default {
  title: 'Components/Icons/Brightness7',
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
