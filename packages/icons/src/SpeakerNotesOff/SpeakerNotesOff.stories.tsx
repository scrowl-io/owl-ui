import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SpeakerNotesOff';
import descriptionMd from './Description.md';

export { SpeakerNotesOff } from './stories/SpeakerNotesOff-index.stories';

export default {
  title: 'Components/Icons/SpeakerNotesOff',
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
