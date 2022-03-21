import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './HighQuality';
import descriptionMd from './Description.md';

export { HighQuality } from './stories/HighQuality-index.stories';

export default {
  title: 'Components/Icons/HighQuality',
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
