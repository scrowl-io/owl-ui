import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './BlurCircular';
import descriptionMd from './Description.md';

export { BlurCircular } from './stories/BlurCircular-index.stories';

export default {
  title: 'Components/Icons/BlurCircular',
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
