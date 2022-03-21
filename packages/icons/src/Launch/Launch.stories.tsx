import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Launch';
import descriptionMd from './Description.md';

export { Launch } from './stories/Launch-index.stories';

export default {
  title: 'Components/Icons/Launch',
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
