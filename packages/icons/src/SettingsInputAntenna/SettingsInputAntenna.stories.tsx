import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SettingsInputAntenna';
import descriptionMd from './Description.md';

export { SettingsInputAntenna } from './stories/SettingsInputAntenna-index.stories';

export default {
  title: 'Components/Icons/SettingsInputAntenna',
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
