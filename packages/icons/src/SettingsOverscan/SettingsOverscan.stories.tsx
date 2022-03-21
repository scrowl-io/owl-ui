import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SettingsOverscan';
import descriptionMd from './Description.md';

export { SettingsOverscan } from './stories/SettingsOverscan-index.stories';

export default {
  title: 'Components/Icons/SettingsOverscan',
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
