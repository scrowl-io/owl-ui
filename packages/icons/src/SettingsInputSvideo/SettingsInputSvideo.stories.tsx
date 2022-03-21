import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SettingsInputSvideo';
import descriptionMd from './Description.md';

export { SettingsInputSvideo } from './stories/SettingsInputSvideo-index.stories';

export default {
  title: 'Components/Icons/SettingsInputSvideo',
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
