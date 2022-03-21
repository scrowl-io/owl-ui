import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Landscape';
import descriptionMd from './Description.md';

export { Landscape } from './stories/Landscape-index.stories';

export default {
  title: 'Components/Icons/Landscape',
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
