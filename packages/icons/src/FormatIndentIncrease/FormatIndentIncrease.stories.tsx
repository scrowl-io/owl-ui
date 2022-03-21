import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FormatIndentIncrease';
import descriptionMd from './Description.md';

export { FormatIndentIncrease } from './stories/FormatIndentIncrease-index.stories';

export default {
  title: 'Components/Icons/FormatIndentIncrease',
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
