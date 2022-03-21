import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ContentCopy';
import descriptionMd from './Description.md';

export { ContentCopy } from './stories/ContentCopy-index.stories';

export default {
  title: 'Components/Icons/ContentCopy',
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
