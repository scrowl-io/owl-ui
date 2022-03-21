import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FormatColorReset';
import descriptionMd from './Description.md';

export { FormatColorReset } from './stories/FormatColorReset-index.stories';

export default {
  title: 'Components/Icons/FormatColorReset',
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
