import * as React from 'react';
import { Meta } from '@storybook/react';
import { Component } from './Radio';
import descriptionMd from './Description.md';

export { Radio } from './stories/Radio-index.stories';

export default {
  title: 'Components/Icons/Radio',
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
