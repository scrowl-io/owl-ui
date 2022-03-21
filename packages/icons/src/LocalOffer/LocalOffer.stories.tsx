import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './LocalOffer';
import descriptionMd from './Description.md';

export { LocalOffer } from './stories/LocalOffer-index.stories';

export default {
  title: 'Components/Icons/LocalOffer',
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
