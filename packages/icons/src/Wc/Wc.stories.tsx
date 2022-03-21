import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Wc';
import descriptionMd from './Description.md';

export { Wc } from './stories/Wc-index.stories';

export default {
  title: 'Components/Icons/Wc',
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
