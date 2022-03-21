import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './AccessAlarms';
import descriptionMd from './Description.md';

export { AccessAlarms } from './stories/AccessAlarms-index.stories';

export default {
  title: 'Components/Icons/AccessAlarms',
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
