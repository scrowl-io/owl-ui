import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './NoEncryption';
import descriptionMd from './Description.md';

export { NoEncryption } from './stories/NoEncryption-index.stories';

export default {
  title: 'Components/Icons/NoEncryption',
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
