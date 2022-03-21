import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PowerSettingsNew';
import descriptionMd from './Description.md';

export { PowerSettingsNew } from './stories/PowerSettingsNew-index.stories';

export default {
  title: 'Components/Icons/PowerSettingsNew',
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
