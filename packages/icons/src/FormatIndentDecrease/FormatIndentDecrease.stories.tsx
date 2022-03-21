import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FormatIndentDecrease';
import descriptionMd from './Description.md';

export { FormatIndentDecrease } from './stories/FormatIndentDecrease-index.stories';

export default {
  title: 'Components/Icons/FormatIndentDecrease',
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
