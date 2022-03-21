import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SettingsInputComposite';
import descriptionMd from './Description.md';

export { SettingsInputComposite } from './stories/SettingsInputComposite-index.stories';

export default {
  title: 'Components/Icons/SettingsInputComposite',
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
