import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FormatBold';
import descriptionMd from './Description.md';

export { FormatBold } from './stories/FormatBold-index.stories';

export default {
  title: 'Components/Icons/FormatBold',
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
