import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SettingsCell';
import descriptionMd from './Description.md';

export { SettingsCell } from './stories/SettingsCell-index.stories';

export default {
  title: 'Components/Icons/SettingsCell',
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
