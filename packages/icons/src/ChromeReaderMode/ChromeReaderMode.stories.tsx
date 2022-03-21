import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ChromeReaderMode';
import descriptionMd from './Description.md';

export { ChromeReaderMode } from './stories/ChromeReaderMode-index.stories';

export default {
  title: 'Components/Icons/ChromeReaderMode',
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
