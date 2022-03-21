import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SettingsInputHdmi';
import descriptionMd from './Description.md';

export { SettingsInputHdmi } from './stories/SettingsInputHdmi-index.stories';

export default {
  title: 'Components/Icons/SettingsInputHdmi',
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
