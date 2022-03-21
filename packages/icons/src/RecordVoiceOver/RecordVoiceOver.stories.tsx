import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './RecordVoiceOver';
import descriptionMd from './Description.md';

export { RecordVoiceOver } from './stories/RecordVoiceOver-index.stories';

export default {
  title: 'Components/Icons/RecordVoiceOver',
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
