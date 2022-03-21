import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FlipToBack';
import descriptionMd from './Description.md';

export { FlipToBack } from './stories/FlipToBack-index.stories';

export default {
  title: 'Components/Icons/FlipToBack',
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
