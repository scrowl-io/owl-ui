import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SettingsBluetooth';
import descriptionMd from './Description.md';

export { SettingsBluetooth } from './stories/SettingsBluetooth-index.stories';

export default {
  title: 'Components/Icons/SettingsBluetooth',
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
