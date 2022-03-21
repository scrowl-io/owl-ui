import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Highlight';
import descriptionMd from './Description.md';

export { Highlight } from './stories/Highlight-index.stories';

export default {
  title: 'Components/Icons/Highlight',
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
