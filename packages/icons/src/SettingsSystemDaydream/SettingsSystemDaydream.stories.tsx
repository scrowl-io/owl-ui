import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SettingsSystemDaydream';
import descriptionMd from './Description.md';

export { SettingsSystemDaydream } from './stories/SettingsSystemDaydream-index.stories';

export default {
  title: 'Components/Icons/SettingsSystemDaydream',
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
