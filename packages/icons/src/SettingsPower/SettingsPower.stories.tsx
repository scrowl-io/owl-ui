import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SettingsPower';
import descriptionMd from './Description.md';

export { SettingsPower } from './stories/SettingsPower-index.stories';

export default {
  title: 'Components/Icons/SettingsPower',
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
