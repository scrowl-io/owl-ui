import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './MoodBad';
import descriptionMd from './Description.md';

export { MoodBad } from './stories/MoodBad-index.stories';

export default {
  title: 'Components/Icons/MoodBad',
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
