import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './FormatLineSpacing';
import descriptionMd from './Description.md';

export { FormatLineSpacing } from './stories/FormatLineSpacing-index.stories';

export default {
  title: 'Components/Icons/FormatLineSpacing',
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
