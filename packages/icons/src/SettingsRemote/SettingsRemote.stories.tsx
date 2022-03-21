import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SettingsRemote';
import descriptionMd from './Description.md';

export { SettingsRemote } from './stories/SettingsRemote-index.stories';

export default {
  title: 'Components/Icons/SettingsRemote',
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
