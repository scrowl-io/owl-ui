import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SwitchCamera';
import descriptionMd from './Description.md';

export { SwitchCamera } from './stories/SwitchCamera-index.stories';

export default {
  title: 'Components/Icons/SwitchCamera',
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
