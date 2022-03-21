import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Functions';
import descriptionMd from './Description.md';

export { Functions } from './stories/Functions-index.stories';

export default {
  title: 'Components/Icons/Functions',
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
