import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Accessibility';
import descriptionMd from './Description.md';

export { Accessibility } from './stories/Accessibility-index.stories';

export default {
  title: 'Components/Icons/Accessibility',
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
