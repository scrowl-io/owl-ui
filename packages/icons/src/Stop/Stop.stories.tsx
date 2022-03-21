import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Stop';
import descriptionMd from './Description.md';

export { Stop } from './stories/Stop-index.stories';

export default {
  title: 'Components/Icons/Stop',
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
