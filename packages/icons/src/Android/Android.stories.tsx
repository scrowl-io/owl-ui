import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Android';
import descriptionMd from './Description.md';

export { Android } from './stories/Android-index.stories';

export default {
  title: 'Components/Icons/Android',
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
