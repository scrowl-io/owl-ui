import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Style';
import descriptionMd from './Description.md';

export { Style } from './stories/Style-index.stories';

export default {
  title: 'Components/Icons/Style',
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
