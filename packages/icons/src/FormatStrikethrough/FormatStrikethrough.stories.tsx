import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FormatStrikethrough';
import descriptionMd from './Description.md';

export { FormatStrikethrough } from './stories/FormatStrikethrough-index.stories';

export default {
  title: 'Components/Icons/FormatStrikethrough',
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
