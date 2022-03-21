import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SdCard';
import descriptionMd from './Description.md';

export { SdCard } from './stories/SdCard-index.stories';

export default {
  title: 'Components/Icons/SdCard',
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
