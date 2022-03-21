import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Map';
import descriptionMd from './Description.md';

export { Map } from './stories/Map-index.stories';

export default {
  title: 'Components/Icons/Map',
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
