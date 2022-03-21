import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './CreditCard';
import descriptionMd from './Description.md';

export { CreditCard } from './stories/CreditCard-index.stories';

export default {
  title: 'Components/Icons/CreditCard',
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
