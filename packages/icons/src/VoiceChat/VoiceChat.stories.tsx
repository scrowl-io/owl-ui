import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './VoiceChat';
import descriptionMd from './Description.md';

export { VoiceChat } from './stories/VoiceChat-index.stories';

export default {
  title: 'Components/Icons/VoiceChat',
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
