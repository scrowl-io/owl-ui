import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './RoundedCorner';
import descriptionMd from './Description.md';

export { RoundedCorner } from './stories/RoundedCorner-index.stories';

export default {
  title: 'Components/Icons/RoundedCorner',
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
