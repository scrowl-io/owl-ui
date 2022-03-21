import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SpeakerNotes';
import descriptionMd from './Description.md';

export { SpeakerNotes } from './stories/SpeakerNotes-index.stories';

export default {
  title: 'Components/Icons/SpeakerNotes',
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
