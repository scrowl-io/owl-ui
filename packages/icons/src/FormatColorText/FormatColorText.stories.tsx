import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FormatColorText';
import descriptionMd from './Description.md';

export { FormatColorText } from './stories/FormatColorText-index.stories';

export default {
  title: 'Components/Icons/FormatColorText',
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
