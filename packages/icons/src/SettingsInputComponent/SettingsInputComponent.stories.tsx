import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SettingsInputComponent';
import descriptionMd from './Description.md';

export { SettingsInputComponent } from './stories/SettingsInputComponent-index.stories';

export default {
  title: 'Components/Icons/SettingsInputComponent',
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
