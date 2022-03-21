import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SpeakerPhone';
import descriptionMd from './Description.md';

export { SpeakerPhone } from './stories/SpeakerPhone-index.stories';

export default {
  title: 'Components/Icons/SpeakerPhone',
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
