import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './WebAsset';
import descriptionMd from './Description.md';

export { WebAsset } from './stories/WebAsset-index.stories';

export default {
  title: 'Components/Icons/WebAsset',
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
