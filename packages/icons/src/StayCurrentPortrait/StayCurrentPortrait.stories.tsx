import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './StayCurrentPortrait';
import descriptionMd from './Description.md';

export { StayCurrentPortrait } from './stories/StayCurrentPortrait-index.stories';

export default {
  title: 'Components/Icons/StayCurrentPortrait',
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
