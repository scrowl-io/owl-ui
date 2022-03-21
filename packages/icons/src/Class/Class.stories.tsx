import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Class';
import descriptionMd from './Description.md';

export { Class } from './stories/Class-index.stories';

export default {
  title: 'Components/Icons/Class',
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
