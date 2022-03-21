import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SettingsBrightness';
import descriptionMd from './Description.md';

export { SettingsBrightness } from './stories/SettingsBrightness-index.stories';

export default {
  title: 'Components/Icons/SettingsBrightness',
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
