import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './KeyboardVoice';
import descriptionMd from './Description.md';

export { KeyboardVoice } from './stories/KeyboardVoice-index.stories';

export default {
  title: 'Components/Icons/KeyboardVoice',
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
