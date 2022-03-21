import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Stars';
import descriptionMd from './Description.md';

export { Stars } from './stories/Stars-index.stories';

export default {
  title: 'Components/Icons/Stars',
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
