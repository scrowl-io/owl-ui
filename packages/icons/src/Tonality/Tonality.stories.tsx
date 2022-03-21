import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Tonality';
import descriptionMd from './Description.md';

export { Tonality } from './stories/Tonality-index.stories';

export default {
  title: 'Components/Icons/Tonality',
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
