import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Https';
import descriptionMd from './Description.md';

export { Https } from './stories/Https-index.stories';

export default {
  title: 'Components/Icons/Https',
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
