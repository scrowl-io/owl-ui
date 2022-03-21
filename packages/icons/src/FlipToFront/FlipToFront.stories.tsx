import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FlipToFront';
import descriptionMd from './Description.md';

export { FlipToFront } from './stories/FlipToFront-index.stories';

export default {
  title: 'Components/Icons/FlipToFront',
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
