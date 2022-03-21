import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SettingsVoice';
import descriptionMd from './Description.md';

export { SettingsVoice } from './stories/SettingsVoice-index.stories';

export default {
  title: 'Components/Icons/SettingsVoice',
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
