import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './VideogameAsset';
import descriptionMd from './Description.md';

export { VideogameAsset } from './stories/VideogameAsset-index.stories';

export default {
  title: 'Components/Icons/VideogameAsset',
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
