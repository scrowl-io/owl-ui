import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './StayPrimaryPortrait';
import descriptionMd from './Description.md';

export { StayPrimaryPortrait } from './stories/StayPrimaryPortrait-index.stories';

export default {
  title: 'Components/Icons/StayPrimaryPortrait',
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
