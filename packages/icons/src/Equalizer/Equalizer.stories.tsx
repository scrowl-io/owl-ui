import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Equalizer';
import descriptionMd from './Description.md';

export { Equalizer } from './stories/Equalizer-index.stories';

export default {
  title: 'Components/Icons/Equalizer',
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
