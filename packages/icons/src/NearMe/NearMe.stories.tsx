import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './NearMe';
import descriptionMd from './Description.md';

export { NearMe } from './stories/NearMe-index.stories';

export default {
  title: 'Components/Icons/NearMe',
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
