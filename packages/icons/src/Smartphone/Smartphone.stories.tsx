import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Smartphone';
import descriptionMd from './Description.md';

export { Smartphone } from './stories/Smartphone-index.stories';

export default {
  title: 'Components/Icons/Smartphone',
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
