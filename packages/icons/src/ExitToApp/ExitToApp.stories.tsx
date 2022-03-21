import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './ExitToApp';
import descriptionMd from './Description.md';

export { ExitToApp } from './stories/ExitToApp-index.stories';

export default {
  title: 'Components/Icons/ExitToApp',
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
