import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './KeyboardTab';
import descriptionMd from './Description.md';

export { KeyboardTab } from './stories/KeyboardTab-index.stories';

export default {
  title: 'Components/Icons/KeyboardTab',
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
