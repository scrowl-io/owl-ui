import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './PhoneForwarded';
import descriptionMd from './Description.md';

export { PhoneForwarded } from './stories/PhoneForwarded-index.stories';

export default {
  title: 'Components/Icons/PhoneForwarded',
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
