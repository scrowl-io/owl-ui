import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SettingsEthernet';
import descriptionMd from './Description.md';

export { SettingsEthernet } from './stories/SettingsEthernet-index.stories';

export default {
  title: 'Components/Icons/SettingsEthernet',
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
