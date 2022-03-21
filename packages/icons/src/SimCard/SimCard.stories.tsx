import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './SimCard';
import descriptionMd from './Description.md';

export { SimCard } from './stories/SimCard-index.stories';

export default {
  title: 'Components/Icons/SimCard',
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
