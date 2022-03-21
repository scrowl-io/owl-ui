import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Brightness6';
import descriptionMd from './Description.md';

export { Brightness6 } from './stories/Brightness6-index.stories';

export default {
  title: 'Components/Icons/Brightness6',
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
