import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Backup';
import descriptionMd from './Description.md';

export { Backup } from './stories/Backup-index.stories';

export default {
  title: 'Components/Icons/Backup',
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
