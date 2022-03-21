import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SettingsApplications';
import descriptionMd from './Description.md';

export { SettingsApplications } from './stories/SettingsApplications-index.stories';

export default {
  title: 'Components/Icons/SettingsApplications',
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
