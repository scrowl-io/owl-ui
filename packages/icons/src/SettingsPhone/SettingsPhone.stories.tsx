import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SettingsPhone';
import descriptionMd from './Description.md';

export { SettingsPhone } from './stories/SettingsPhone-index.stories';

export default {
  title: 'Components/Icons/SettingsPhone',
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
