import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Mail';
import descriptionMd from './Description.md';

export { Mail } from './stories/Mail-index.stories';

export default {
  title: 'Components/Icons/Mail',
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
